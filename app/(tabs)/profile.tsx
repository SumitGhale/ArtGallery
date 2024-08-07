import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from "react-native";
import { signOut } from "@firebase/auth";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/Contexts/AuthContext";
import { DBContext } from "@/Contexts/dbContext";
import { router, useRouter } from "expo-router";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default function Profile() {
  const auth = useContext(AuthContext);
  const router = useRouter();
  const db = useContext(DBContext);
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded == false) {
      getYourPosts();
      setLoaded(true);
    }
  }, []);

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
      where("userID", "==", "user@mailinator.com")
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

  const ListItem = (props: any) => {
    return (
      <Image
        style={styles.post}
        source={{
          uri: props.postImage,
        }}
      />
    );
  };

  const renderItem = ({ item }: any) => {
    return <ListItem postImage={item.imageURL} />;
  };

  return (
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
        Amelia
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
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  post: {
    height: 125,
    width: 100,
    marginBottom: 10,
    marginRight: 10,
    flex: 1,
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
