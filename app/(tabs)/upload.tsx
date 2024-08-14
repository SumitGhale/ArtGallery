import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";

import { Fontisto } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { AuthContext } from "@/Contexts/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { DBContext } from "@/Contexts/dbContext";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Modal from "@/components/Modal";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

//  TODO: implement search tags and

export default function Upload() {
  const auth = useContext(AuthContext);
  const db = useContext(DBContext);

  //  states
  const [selectedImage, setImageSelected] = useState(
    "https://img.freepik.com/free-vector/landing-page-template-design-business-websides_52683-22971.jpg"
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postSearchTags, setSearchtags] = useState("");

  //  Access camera using expo image picker
  const pickcameraImageAsync = async () => {
    console.log("i am here");
    let result = await ImagePicker.launchCameraAsync({
      cameraType: ImagePicker.CameraType.front,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      //  save image
      console.log("I am here.");
      setModalIsOpen(false);
      setImageSelected(result.assets[0].uri);
    } else {
      alert("you did not select any image.");
    }
  };

  const resetFields = () =>{
    setImageSelected("https://img.freepik.com/free-vector/landing-page-template-design-business-websides_52683-22971.jpg")
    setPostTitle("")
    setPostDescription("")
    setSearchtags("")
  }

  //  Access gallery using expo image picker
  const pickGallerymageAsync = async () => {
    console.log("i am here");
    let result = await ImagePicker.launchImageLibraryAsync({
      cameraType: ImagePicker.CameraType.front,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      //  save image
      setImageSelected(result.assets[0].uri);
      setModalIsOpen(false);
    } else {
      alert("you did not select any image.");
    }
  };

  const addPost = async () => {
    let tagsArray: string[] = postSearchTags.split(" ")
    const Post = {
      title: postTitle,
      description: postDescription,
      imageURL: selectedImage,
      tags: tagsArray,
      userID: auth.currentUser.email,
      likes: ["user1", "user2"],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      const path = `posts`;
      const docRef = await addDoc(collection(db, path), Post);
      resetFields()
      alert("Post uploaded successfully !!!.");
    } catch (e: any) {
      alert(`Error adding documennt: ${e.errorMessage}`);
    }
  };

  console.log(modalIsOpen);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.upload}>
        <TouchableOpacity
          onPress={() => {
            setModalIsOpen(true);
          }}
        >
          <Image
            style={styles.uploadImageicon}
            source={{
              uri: selectedImage,
            }}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Title"
        style={styles.input}
        value={postTitle}
        onChangeText={(text) => setPostTitle(text)}
      />

      <TextInput
        placeholder="Description"
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        value={postDescription}
        onChangeText={(text) => {
          setPostDescription(text);
        }}
      />

      <TextInput
        placeholder="Search tags"
        style={styles.input}
        value={postSearchTags}
        onChangeText={(text) => setSearchtags(text)}
      />

      <View style={styles.radioButtons}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Fontisto name="radio-btn-active" size={24} color="#08D9D6" />
          <Text> Private </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Fontisto name="radio-btn-passive" size={24} color="black" />
          <Text> Public </Text>
        </View>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => {
          addPost();
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Upload</Text>
      </Pressable>

      {/* Modal to display media options */}
      <Modal isOpen={modalIsOpen}>
        <View style={styles.modal}>
          <Text style={{ fontWeight: "500", marginBottom: 10 }}>
            Choose media options{" "}
          </Text>

          <TouchableOpacity
            style={styles.mediaButton}
            onPress={pickcameraImageAsync}
          >
            <FontAwesome name="camera" size={24} color="white" />
            <Text style={{ color: "white" }}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mediaButton}
            onPress={pickGallerymageAsync}
          >
            <MaterialIcons name="perm-media" size={24} color="white" />
            <Text style={{ color: "white" }}>Photos</Text>
          </TouchableOpacity>

          <Pressable
            style={styles.closeModal}
            onPress={() => setModalIsOpen(false)}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Cancel</Text>
          </Pressable>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEAEA",
  },
  upload: {
    height: 250,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderStyle: "dashed",
    borderWidth: 1,
  },
  uploadImageicon: {
    height: 150,
    width: 150,
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
  radioButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 15,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FF2E63",
    marginHorizontal: 13,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  mediaButton: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#FF2E63",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  modal: {
    backgroundColor: "#EAEAEA",
    padding: 20,
    borderRadius: 10,
  },
  closeModal: {
    gap: 10,
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
});
