import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { firebaseConfig } from "@/Config/config";
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { AuthContext } from "@/Contexts/AuthContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  //  initialize firebase
  const FBapp = initializeApp(firebaseConfig);

  // initialize  firebase authentication
  const FBauth = getAuth(FBapp);

  return (
    <AuthContext.Provider value={FBauth}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
