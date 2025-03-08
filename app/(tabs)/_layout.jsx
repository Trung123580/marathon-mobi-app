import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Tabs } from "expo-router"
import { Image } from "react-native"
import icons from "../../constants/icons"
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image style={{
        width: 24,
        height: 24
      }} source={icon} resizeMode="contain" tintColor={color} />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon icon={icons.home} color={color} name='Home' focused={focused} />
            },
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: "bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon icon={icons.home} color={color} name='Home' focused={focused} />
            },
          }}
        />
          <Tabs.Screen
          name='profile'
          options={{
            title: "profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon icon={icons.home} color={color} name='Home' focused={focused} />
            },
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: "create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon icon={icons.home} color={color} name='Home' focused={focused} />
            },
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
