import React from "react"
import { StyleSheet, Text, View } from "react-native"
const Trending = ({ posts }) => {
  return (
    <View style={styles.container}>
      <Text>Trending</Text>
    </View>
  )
}

export default Trending
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
