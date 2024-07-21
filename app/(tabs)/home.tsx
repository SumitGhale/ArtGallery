import { Text, StyleSheet, Image } from "react-native";
import Post from "@/components/Post";
import { ScrollView } from "react-native-gesture-handler";
export default function home() {
  return (
    <ScrollView style={styles.container}>
      {/* <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}> Art Gallery </Text> */}

      <Image
        source={require("../../assets/images/3-removebg-preview.png")}
        style={{ height: 80, objectFit: "contain" }}
      />
      <Post
        username="William"
        caption="Digital art1"
        profileImage="https://images.unsplash.com/photo-1492462543947-040389c4a66c?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        postImage="https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <Post
        username="Rochelle"
        caption="Digital art2"
        profileImage="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        postImage="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#EAEAEA",
    flexDirection: "column",
  },
});
