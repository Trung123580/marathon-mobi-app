import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-pbold">App</Text>
      <StatusBar backgroundColor="#161622" style="auto" />
      <Link href='/profile' className="text-red-600">Go to profile</Link>
      <Link href='/home' className="text-red-600">Go to home</Link>
    </View>
  )
}

export default App

