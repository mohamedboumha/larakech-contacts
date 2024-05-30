import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const tabsArray = [
  { iconName: "info", label: "infos" },
  { iconName: "pencil", label: "notes" },
  { iconName: "calendar-plus", label: "tâches" },
  { iconName: "bullseye", label: "affaires" },
  { iconName: "bars", label: "autres" },
];

const DetailsMenuTab = ({ currentPage }: any) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 flex-row justify-around items-center p-3 bg-[#9da9b4] w-full">
      {tabsArray.map((tab) => {
        return (
          <TouchableOpacity className="flex-col items-center justify-center">
            <FontAwesome6
              name={tab.iconName}
              size={30}
              color={currentPage == tab.label ? "balck" : "white"}
            />
            <Text
              className={`text-${
                currentPage == tab.label ? "balck" : "white"
              } text-xs capitalize mt-1`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DetailsMenuTab;
