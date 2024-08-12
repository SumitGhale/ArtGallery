import { DBContext } from "@/Contexts/dbContext"
import { useLocalSearchParams, useNavigation } from "expo-router"
import { useContext, useEffect, useState } from "react"
import {
  TextInput,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Pressable,
  Text,
} from "react-native"
import { doc, getDoc, deleteDoc, updateDoc } from "@firebase/firestore"

export default function ItemPost(props: any) {
  const db = useContext(DBContext);
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const { itemID } = params;
  const [documennt, setDocument] = useState<any>();
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");

  const getDocument = async (document: string) => {
    const docRef = doc(db, "posts", itemID)
    const docSnap = await getDoc(docRef)
    setDocument(docSnap.data());
  };

  const resetTextField = () => {
    setPostTitle("")
    setPostDescription("")
  }

  const updateDocumen = async () =>{
    {const docRef = doc(db, "posts", itemID)
    const updateData = {
        title: postTitle ? postTitle : documennt.title,
        description: postDescription ? postDescription : documennt.description
    }
    await updateDoc(docRef, updateData)
    navigation.goBack()
    alert("Update successfull")}
  }

  const deleteDocument = async(documentId: string) =>{
    const docRef = doc(db, "posts", itemID)
    const delDoc = await deleteDoc(docRef)
    navigation.goBack()
  }

  useEffect(() => {
    navigation.setOptions({ headerShown: true, title: "Update Post" })
    getDocument(itemID);
  }, [navigation])

  return documennt ? (
    <ScrollView>
      <Image
        style={styles.coverImage}
        source={{
          uri: documennt.imageURL,
        }}
      />
      <TextInput
        placeholder={documennt.title}
        style={styles.input}
        value={postTitle}
        onChangeText={(text) => setPostTitle(text)}
      />

      <TextInput
        placeholder={documennt.description}
        style={styles.input}
        value={postDescription}
        onChangeText={(text) => setPostDescription(text)}
      />

      <Pressable style={styles.button} onPress={() => {updateDocumen()}}>
        <Text style={{ color: "white", textAlign: "center" }}>Update</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => deleteDocument(itemID)}>
        <Text style={{ color: "white", textAlign: "center" }}>Delete</Text>
      </Pressable>
    </ScrollView>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    height: StatusBar.currentHeight,
  },
  coverImage: {
    height: 300,
    width: 380,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#FF2E63",
    marginHorizontal: 13,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
});
