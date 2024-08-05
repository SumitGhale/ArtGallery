import { Image, ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { signOut } from "@firebase/auth";
import { useContext } from "react";
import { AuthContext } from "@/Contexts/AuthContext";
import { router, useRouter } from "expo-router";

export default function Profile() {
  const auth = useContext(AuthContext);
  const router = useRouter()
  const signout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      router.replace("/")
    }).catch((error) => {
      // An error happened.
    });
  }

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

      <View style={styles.postContainer}>
        <Image
          style={styles.post}
          source={{
            uri: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2245&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Image
          style={styles.post}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1711136314731-8c3fe1831672?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Image
          style={styles.post}
          source={{
            uri: "https://images.unsplash.com/photo-1683481554448-eeaf87df9729?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Image
          style={styles.post}
          source={{
            uri: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2245&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Image
          style={styles.post}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1711136314731-8c3fe1831672?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Image
          style={styles.post}
          source={{
            uri: "https://images.unsplash.com/photo-1683481554448-eeaf87df9729?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Image
          style={styles.post}
          source={{
            uri: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2245&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Image
          style={styles.post}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1711136314731-8c3fe1831672?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Image
          style={styles.post}
          source={{
            uri: "https://images.unsplash.com/photo-1683481554448-eeaf87df9729?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
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
