import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { images } from "../../constants"
import FormField from "../../components/FormField"
import CustomButton from "../../components/CustomButton"
import { Link } from "expo-router"
const signUp = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const [showPassWord, setShowPassWord] = useState({
    password: false,
    confirmPassword: false,
  })
  const handleShowPassWord = ({ key }) => {
    setShowPassWord((prev) => ({ ...prev, [key]: !prev[key] }))
  }
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = () => {}

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
          <View className='flex-row gap-2 mt-10'>
            <Text className='text-2xl text-white font-semibold font-psemibold'>Sign up</Text>
            <View className='relative'>
              <Text className='text-2xl text-secondary font-semibold font-psemibold'>Xmedia</Text>
              <Image source={images.path} className='w-[56px] h-[10px] absolute -bottom-2 -right-0' resizeMode='contain' />
            </View>
          </View>
          <FormField title='Email' type='text' otherStyles='mt-7' keyboardType='email-address' onChange={(e) => setFormState((prev) => ({ ...prev, email: e }))} value={formState.email} />
          <FormField
            title='Password'
            otherStyles='mt-7'
            value={formState.password}
            type='password'
            onChange={(e) => setFormState((prev) => ({ ...prev, password: e }))}
            keyboardType='password-address'
            onShowPassword={() => handleShowPassWord({ key: "password" })}
            secureTextEntry={!showPassWord.password}
          />
          <FormField
            title='Confirm Password'
            otherStyles='mt-7'
            type='password'
            value={formState.confirmPassword}
            onChange={(e) => setFormState((prev) => ({ ...prev, confirmPassword: e }))}
            keyboardType='password-address'
            onShowPassword={() => handleShowPassWord({ key: "confirmPassword" })}
            secureTextEntry={!showPassWord.confirmPassword}
          />
          <CustomButton title='Sign Up' handlePress={handleSubmit} containerStyles='mt-7' isLoading={isSubmit} />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>Don't have account?</Text>
            <Link href='/signIn' className='text-lg font-psemibold text-secondary'>
              Sing In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signUp
