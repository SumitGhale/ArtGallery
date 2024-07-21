import { Image, StyleSheet, Text, View } from "react-native";

export default function ImageCard(props: any) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.artistInfo}>
        <Image style={styles.artistImage} source={{ uri: props.artistImage }} />
        <Text> {props.artistName} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEAEA",
    width: 120,
    borderRadius: 5,
  },
  image: {
    height: 110,
    width: 120,
  },
  artistInfo: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems:"center",
    padding: 10,
    gap: 10

  },
  artistImage: {
    height: 40,
    width: 40,
    borderRadius: 50, 
  },
});
