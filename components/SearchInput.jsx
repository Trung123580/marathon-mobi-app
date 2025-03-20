import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import icons from "../constants/icons"
const SearchInput = ({ title, value, type, placeholder, onChange, otherStyles, secureTextEntry, onShowPassword, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View className={`w-full mt-1 h-16 space-x-4 px-4 rounded-2xl flex-row items-center ${isFocused ? "border-2 border-secondary bg-black-100" : "bg-black-100"}`}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor='#7b7b8b'
        secureTextEntry={secureTextEntry}
        className='text-base mt-0.5 text-white flex-1 font-pregular'
        {...props}
      />
      <TouchableOpacity onPress={onShowPassword}>
        <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput
