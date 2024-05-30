import { View, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchInput = ({ props }: any) => {
  return (
    <View className="w-9/12">
      <TextInput
        className="bg-white text-black h-10 border border-gray-400 rounded-full px-3 w-full"
        placeholder="Search..."
      ></TextInput>
      <TouchableOpacity className="bg-[#7dc6cd] absolute right-0 w-10 h-10 rounded-full flex-row items-center justify-center">
        <Feather name="search" size={15} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
