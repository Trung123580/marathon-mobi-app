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
      <Text clasName={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`} style={{color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          height: 84,
          borderTopWidth: 1,
          borderTopColor: '#232533',
        }
      }}>
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
              return <TabIcon icon={icons.bookmark} color={color} name='Home' focused={focused} />
            },
          }}
        />
          <Tabs.Screen
          name='profile'
          options={{
            title: "profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon icon={icons.profile} color={color} name='Home' focused={focused} />
            },
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: "create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return <TabIcon icon={icons.plus} color={color} name='Home' focused={focused} />
            },
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
