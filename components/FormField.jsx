import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import icons from "../constants/icons"
const FormField = ({ title, value, type, placeholder, onChange, otherStyles, secureTextEntry, onShowPassword, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
    <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

    <View
      className={`w-full mt-1 h-16 px-4 rounded-2xl flex-row items-center ${
        isFocused ? 'border-2 border-secondary bg-black-100' : 'bg-black-100'
      }`}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor='#7b7b8b'
        secureTextEntry={secureTextEntry}
        className='flex-1 text-white font-psemibold text-base'
        {...props}
      />
      {type === "password" && (
        <TouchableOpacity onPress={onShowPassword}>
          <Image
            source={!secureTextEntry ? icons.eye : icons.eyeHide}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      {/* {title === "Confirm Password" && (
        <TouchableOpacity onPress={() => setIsShowPassWord(!isShowPassWord)}>
          <Image
            source={!isShowPassWord ? icons.eye : icons.eyeHide}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )} */}
    </View>
  </View>
  )
}

export default FormField
