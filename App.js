import React from "react"
import { StyleSheet, StatusBar } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HomePage from "./src/features/HomePage"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <HomePage />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
