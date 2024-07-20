import { Text, View, Pressable } from "react-native";
import { signOut } from "@firebase/auth";
import { useContext } from "react";
import { AuthContext } from "@/Contexts/AuthContext";
import { useRouter } from "expo-router";
export default function home() {
  const router = useRouter();
//   const auth = useContext(AuthContext);

//   signOut(auth).then(() => {
//     router.replace('/index')
//   })
//   .catch((error) =>{
//     console.log((error.message))
//   })
  return (
    <View>
      <Text> Home </Text>
      <Pressable>
        <Text> Sign in with google</Text>
      </Pressable>
    </View>
  );
}
