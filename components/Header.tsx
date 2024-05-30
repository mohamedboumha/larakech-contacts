import { View, Text, Image } from "react-native";
import React from "react";
import profile from "@/assets/images/profile.png";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import SearchInput from "./SearchInput";

const Header = ({ searchBar, user, client, ...props }: any) => {
  console.log(user);

  return (
    <LinearGradient
      colors={["#2b5a75", "#2d99a8"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      className="w-full px-3 py-5 flex-row items-center justify-between"
    >
      {searchBar ? (
        <SearchInput props={props} />
      ) : (
        <View className="flex-row items-center justify-between">
          <Image source={profile} className="w-[50px] h-[50px] rounded-3xl" />
          <View className="ml-3">
            <Text className="text text-white">Bonjour {user && user.nom}</Text>
            <Text className="text-[10px] text-white opacity-50">
              {client && client.nom}
            </Text>
          </View>
        </View>
      )}

      <View className="flex-row items-center justify-between w-2/12">
        <Link href="#" className="">
          <MaterialIcons name="notifications-none" size={30} color="white" />
        </Link>
        <Link href="#">
          <MaterialIcons name="menu" size={30} color="white" />
        </Link>
      </View>
    </LinearGradient>
  );
};

export default Header;
