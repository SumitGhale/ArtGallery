import AuthForm from "@/components/AuthForm";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "@firebase/auth"
import { AuthContext } from "@/Contexts/AuthContext";


export default function Login() {
  const router = useRouter();
  const auth = useContext(AuthContext)
  const [ error, setError ] = useState("")


  const signIn = (email: string, password: string) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      router.replace("/home")
    })
    .catch((error) =>{
      setError(error.code)
    })
  }


  return (
    <View>
    <Text style = {{color: "#cc0000"}}>{error && error}</Text>

      <AuthForm title="Login" actionText="Login" action = {signIn}/>
      <Pressable style={styles.button} onPress={() => router.push("./signUp")}>
        <Text style={styles.buttonText}> Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderRadius: 4,
    margin: 40,
  },
  buttonText: {
    color: "#efefef",
    textAlign: "center",
    padding: 8,
  },
});
