// import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native"
import { PaperProvider } from "react-native-paper"
import HomePage from "./src/features/HomePage"

export default function App() {
  StatusBar.setBarStyle("dark-content")
  return (
    <PaperProvider>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <HomePage />
      </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom: 20,
  },
})
