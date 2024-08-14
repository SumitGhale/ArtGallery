import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  SafeAreaView,
} from "react-native";
import { signOut } from "@firebase/auth";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/Contexts/AuthContext";
import { DBContext } from "@/Contexts/dbContext";
import { useRouter } from "expo-router";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { TouchableOpacity } from "react-native";

export default function Profile() {
  const auth = useContext(AuthContext);
  const router = useRouter();
  const db = useContext(DBContext);
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    if (loaded == false) {
      fetchUserData();
      getYourPosts();
      setLoaded(true);
    }
  }, [userData, data]);

  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.replace("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const getYourPosts = () => {
    const path = "posts";
    const q = query(
      collection(db, path),
      where("userID", "==", auth.currentUser.email)
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      let items: any = [];
      querySnapshot.forEach((doc) => {
        let item = doc.data();
        item.id = doc.id;
        items.push(item);
      });
      setData(items);
    });
  };

  const fetchUserData = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserData(docSnap.data());
      console.log(userData);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const ListItem = (props: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "editPost/[itemID]",
            params: { itemID: props.id },
          });
        }}
      >
        <Image
          style={styles.post}
          source={{
            uri: props.postImage,
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }: any) => {
    return <ListItem postImage={item.imageURL} id={item.id} />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Image
          style={styles.coverImage}
          source={{
            uri: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800",
          }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}>
          {userData?.userName || "Unknown"}
        </Text>
        <Text style={{ fontWeight: 400, fontSize: 18, textAlign: "center" }}>
          Digital artist / Photographer
        </Text>

        <View style={styles.postInfo}>
          <Text style={styles.postInfotext}>400 Posts</Text>
          <Text style={{ fontSize: 18 }}>100K Likes</Text>
        </View>

        {/*   user posts    */}

        <View style={styles.postContainer}>
          <FlatList data={data} renderItem={renderItem} numColumns={3} />
        </View>

        <Pressable style={styles.button} onPress={signout}>
          <Text style={styles.buttonText}> Sign out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEAEA",
  },
  coverImage: {
    height: 250,
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: -75,
    marginBottom: 10,
  },
  postInfo: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  postInfotext: {
    borderEndWidth: 2,
    borderBlockEndColor: "black",
    paddingEnd: 60,
    fontSize: 18,
  },
  postContainer: {
    margin: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  post: {
    minHeight: 125,
    minWidth: 100,
    flex: 1,
    marginBottom: 10,
    marginRight: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FF2E63",
    marginHorizontal: 13,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#efefef",
    textAlign: "center",
    padding: 8,
  },
});
