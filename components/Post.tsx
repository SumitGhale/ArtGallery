import { Image, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

export default function Post(props: any) {
  const router = useRouter();

  return (
    <View>
      <View style={styles.userInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: props.profileImage }}
        />
        <View>
          <Text style={{ fontWeight: 600, fontSize: 18 }}>
            {" "}
            {props.username}{" "}
          </Text>
          <Text> {props.caption} </Text>
        </View>
      </View>
      <Image style={styles.postImage} source={{ uri: props.postImage }} />
      <View style={styles.icons}>
        <FontAwesome name="heart" size={24} color="red" />
        <FontAwesome
          name="comment"
          size={24}
          color="black"
          onPress={() =>
            router.push({
              pathname: "addComment/[post_id]",
              params: { post_id: props.id },
            })
          }
        />
        <FontAwesome name="share-alt" size={24} color="black" />
      </View>
      <Text style={{ marginVertical: 15 }}>8M Likes 756K Comments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    height: 40,
    width: 40,
    objectFit: "cover",
  },
  userInfo: {
    flexDirection: "row",
    gap: 10,
  },
  postImage: {
    height: 400,
    marginVertical: 10,
  },
  icons: {
    flexDirection: "row",
    gap: 20,
  },
});
