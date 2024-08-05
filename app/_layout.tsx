import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { firebaseConfig } from "@/Config/config";
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { AuthContext } from "@/Contexts/AuthContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getFirestore } from "@firebase/firestore";
import { DBContext } from "@/Contexts/dbContext";

export default function RootLayout() {
  //  initialize firebase
  const FBapp = initializeApp(firebaseConfig);

  // initialize  firebase authentication
  const FBauth = getAuth(FBapp);

  //initialise the database firestore
  const FBdb = getFirestore(FBapp);

  return (
    <AuthContext.Provider value={FBauth}>
      <DBContext.Provider value={FBdb}>
        <GestureHandlerRootView style={styles.container}>
          <SafeAreaView style={styles.container}>
            <Stack screenOptions={{ headerShown: false }} />
          </SafeAreaView>
        </GestureHandlerRootView>
      </DBContext.Provider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
