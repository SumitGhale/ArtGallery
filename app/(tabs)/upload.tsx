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
import { color } from "@rneui/themed/dist/config";

export default function Upload() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.upload}>
        <Image
          style={styles.uploadImageicon}
          source={{
            uri: "https://img.freepik.com/free-vector/landing-page-template-design-business-websides_52683-22971.jpg",
          }}
        />
      </View>

      <TextInput placeholder="Title" style={styles.input} />
      <TextInput
        placeholder="Description"
        style={styles.input}
        multiline={true}
        numberOfLines={4}
      />
      <TextInput placeholder="Search tags" style={styles.input} />

      <View
        style={styles.radioButtons}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Fontisto name="radio-btn-active" size={24} color="#08D9D6" />
          <Text> Private </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Fontisto  name="radio-btn-passive" size={24} color="black" />
          <Text> Public </Text>
        </View>
      </View>
      <Pressable style = {styles.button}>
        <Text style = {{color: "white", textAlign: "center"}}>Upload</Text>
      </Pressable>
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
  radioButtons:{
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 15,
    marginBottom: 30,
  },
  button:{
    backgroundColor: "#FF2E63",
    marginHorizontal: 13,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center"
  }
});
