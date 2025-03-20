import { StatusBar } from "expo-status-bar"
import { Tabs } from "expo-router"
import { Image, View } from "react-native"

import { icons } from "../../constants"
// import { Loader } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";

const TabIcon = ({ icon, color }) => {
  return (
    <View className='flex items-center justify-center gap-2'>
      <Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-6' />
    </View>
  )
}

const TabLayout = () => {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          // tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            // borderTopWidth: 1,
            // borderTopColor: "#232533",
            // height: 84,
          },
        }}
        initialRouteName='home'>
        <Tabs.Screen
          name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabIcon icon={icons.home} color={color} />,
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabIcon icon={icons.bookmark} color={color} />,
          }}
        />

        <Tabs.Screen
          name='create'
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabIcon icon={icons.plus} color={color} />,
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabIcon icon={icons.profile} color={color} />,
          }}
        />
      </Tabs>

      {/* <Loader isLoading={loading} /> */}
      <StatusBar backgroundColor='#161622' style='light' />
    </>
  )
}

export default TabLayout
