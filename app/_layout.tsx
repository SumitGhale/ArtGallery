import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { firebaseConfig } from "@/Config/config";
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { AuthContext } from "@/Contexts/AuthContext";

export default function RootLayout() {
  //  initialize firebase
  const FBapp = initializeApp(firebaseConfig);

  // initialize  firebase authentication
  const FBauth = getAuth(FBapp);

  return (
    <AuthContext.Provider value={FBauth}>
      <SafeAreaView style={styles.container}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
