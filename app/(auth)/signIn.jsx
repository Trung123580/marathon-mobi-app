import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { images } from "../../constants"
import FormField from "../../components/FormField"
const signIn = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">Login</Text>
          <FormField 
            title='Email'
            otherStyles="mt-7"
            keyboardType='email-address'
            onChange={(e)=> setFormState(prev => ({...prev, email: e}))}
            value={formState.email}
          />
          <FormField 
            title='PassWord'
            otherStyles="mt-7"
            value={formState.email}
            onChange={(e)=> setFormState(prev => ({...prev, password: e}))}
            keyboardType='password-address'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn
