import { Text, StyleSheet, Image, View, FlatList } from "react-native";
import Post from "@/components/Post";
import { ScrollView } from "react-native";
import {
  collection,
  query,
  onSnapshot
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { DBContext } from "@/Contexts/dbContext";
import { AuthContext } from "@/Contexts/AuthContext";

export default function home() {
  const db = useContext(DBContext);

  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded == false) {
      fetchData();
      setLoaded(true);
    }
  }, [data]);

  const fetchData = async () => {
    const path = "posts";
    const q = query(collection(db, path));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let items: any = [];
      querySnapshot.forEach((doc) => {
        let item = doc.data();
        item.id = doc.id;
        items.push(item);
      });
      setData(items);
      console.log(items)
    });
  };

  const ListItem = (props: any) => {
    console.log(props)
    return (
      <Post
        username={props.artistName}
        caption={props.title}
        profileImage="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        postImage={props.postImage}
      />
    );
  };

  const Separator = () => {
    return <View style={styles.separator}></View>;
  };

  const renderItem = ({ item }: any) => {
    console.log(item)
    return <ListItem title={item.title} id={item.id} artistName = {item.userID} postImage = {item.imageURL} />;
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/3-removebg-preview.png")}
        style={{ height: 80, objectFit: "contain" }}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#EAEAEA",
    flexDirection: "column",
  },
  separator: {
    height: 10,
    backgroundColor: "white",
  },
});
