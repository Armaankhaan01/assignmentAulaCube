import React from "react"
import { SafeAreaView, StyleSheet, StatusBar } from "react-native"
import { PaperProvider } from "react-native-paper"
import HomePage from "./src/features/HomePage"

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="light-content" backgroundColor="white" />
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
  },
})
