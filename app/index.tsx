import AuthForm from "@/components/AuthForm";
import { Text, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { AuthContext } from "@/Contexts/AuthContext";

export default function Login() {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const [error, setError] = useState("");

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.replace("(tabs)/home");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={{ height: 400 }}
        source={{
          uri: "https://img.freepik.com/premium-photo/this-beautiful-3d-illustration-was-generated-word-art-day_1119325-58782.jpg?w=1380",
        }}
      />
      <Text style={{ color: "#cc0000" }}>{error && error}</Text>

      <AuthForm title="Login" actionText="Login" action={signIn} />
      <Pressable style={styles.signUpbutton} onPress={() => router.push("./signUp")}>
        <Text style={styles.buttonText}> Don't have an account? sign up</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEAEA",
  },
  signUpbutton: {
    marginBottom: 15,
    marginRight: 60,
    borderRadius: 5,

  },
  buttonText: {
    color: "#FF2E63",
    textAlign: "right",
    fontSize: 12,
    // fontWeight: 600
  },
});
