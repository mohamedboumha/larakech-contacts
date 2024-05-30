import { View, Text, TextInput } from "react-native";
import React from "react";

const InputWrapper = ({ value, label, children }: any) => {
  return (
    <View className="flex-col justify-center mx-5 mb-5">
      <Text className="capitalize opacity-50 mb-1 font-medium">{label}</Text>
      <View className="flex-row w-full">
        <TextInput
          className={`${
            children ? "w-8/12" : "w-full"
          } bg-white text-black h-10 shadow-sm shadow-black px-3 rounded`}
          value={value}
        ></TextInput>
        {children && (
          <View className="bg-[#54c242] flex-row items-center justify-center w-10 rounded-r">
            {children}
          </View>
        )}
      </View>
    </View>
  );
};

export default InputWrapper;
