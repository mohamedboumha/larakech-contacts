import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const BackNavigation = ({ pageName, theme = "black" }: any) => {
  const navigation = useNavigation();
  return (
    <View className="w-full p-3 flex-row justify-between items-center opacity-80">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className="flex-row items-center">
          <Ionicons name="chevron-back-outline" size={20} color={theme} />
          {pageName == "details" && (
            <Text className={`text-${theme} capitalize`}>contacts</Text>
          )}
        </View>
      </TouchableOpacity>
      <Text className={`text-${theme} capitalize font-semibold`}>
        {pageName == "contacts" && pageName}
      </Text>
      <Text className={`text-${theme} capitalize`}>
        {pageName == "details" && "Modifier"}
      </Text>
    </View>
  );
};

export default BackNavigation;
