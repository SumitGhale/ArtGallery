import AuthForm from "@/components/AuthForm";
import { AuthContext } from "@/Contexts/AuthContext";
import { useContext, useState } from "react";
import { Text, ScrollView, Pressable, StyleSheet } from "react-native";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { router } from "expo-router";
import { DBContext } from "@/Contexts/dbContext";

export default function SignUp() {
  // Accessing the current instance of authenticcation
  const auth = useContext(AuthContext);
  const db = useContext(DBContext);

  const [error, setError] = useState("");

  const createUser = async (email: string, name: string) => {
    const user = {
      userEmail: email,
      userName: name,
    };
    try {
      const path = `users/${auth.currentUser.uid}`;
      const docRef = await setDoc(doc(db, path), user);
      alert("user added");
    } catch (e: any) {
      alert("user could not be added " + e.errorMessage + e.code);
    }
  };

  // function to create new user
  const createAccount = async (
    email: string,
    password: string,
    name: string
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await createUser(email, name);
    } catch (e: any) {
      setError((e.code = " " + e.message));
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.replace("/home");
    }
  });
  return (
    <ScrollView>
      <AuthForm title="SignUp" actionText="SignUp" action={createAccount} />
      <Text>{error && error}</Text>
      <Pressable style={styles.signUpbutton} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}> Already a user? Sign In</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  signUpbutton: {
    marginBottom: 15,
    marginRight: 60,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FF2E63",
    textAlign: "right",
    fontSize: 12,
    // fontWeight: 600,
  },
});
