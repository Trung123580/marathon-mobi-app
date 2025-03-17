import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const FormField = ({title, value, placeholder, onChange, otherStyles, ...props}) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='w-full border-2 border-black-200 h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center'>
        <TextInput 
            placeholder={placeholder} 
            className='flex-1 text-white font-psemibold text-base'
            value={value}
            onChange={onChange}
            placeholderTextColor="#7b7b8b"
            secureTextEntry
        >
        </TextInput>
      </View>
    </View>
  )
}

export default FormField
