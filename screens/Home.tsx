import { FlatList, Text, TouchableOpacity, View } from "react-native";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import Header from "@/components/Header";

const icons = {
  produit: <Entypo name="shopping-cart" size={150} color="#b2bdc4" />,
  contact: <Entypo name="user" size={150} color="#b2bdc4" />,
  note: <FontAwesome6 name="pencil" size={150} color="#b2bdc4" />,
  piece: <Entypo name="calculator" size={150} color="#b2bdc4" />,
  organisation: <FontAwesome5 name="building" size={150} color="#b2bdc4" />,
  action: <FontAwesome5 name="calendar-plus" size={150} color="#b2bdc4" />,
  affaire: <FontAwesome name="bullseye" size={150} color="#b2bdc4" />,
  document: <Entypo name="text-document" size={150} color="#b2bdc4" />,
  reglement: <FontAwesome6 name="list-check" size={150} color="#b2bdc4" />,
  ligne: <Entypo name="line-graph" size={150} color="#b2bdc4" />,
  ticket: <Entypo name="ticket" size={150} color="#b2bdc4" />,
};

const Card = ({ title, value }: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="overflow-hidden"
      onPress={() => {
        if (title == "contact") {
          navigation.navigate("Contacts");
        }
      }}
    >
      <View className="relative bg-[#98a7b1] rounded-lg m-6 w-36 h-36 overflow-hidden">
        <Text className="absolute top-0 right-2 text-white text-2xl">
          {value}
        </Text>
        <Text className="absolute top-0 right-5 text-gray-400">
          {icons[title]}
        </Text>
        <Text className="absolute bottom-1 left-2 capitalize text-white">
          {title == "action"
            ? "tâche"
            : title == "organisation"
            ? "entreprise"
            : title}
          <Text className="lowercase">s</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const { getCardsInfo, cardsInfo, getSessionInfo, sessionInfo } = useFetch();

  useEffect(() => {
    getSessionInfo();
    getCardsInfo();
  }, []);

  return (
    <View className="h-screen">
      <Header user={sessionInfo?.user} client={sessionInfo?.client} />
      <FlatList
        data={cardsInfo}
        renderItem={({ item }) => <Card title={item.key} value={item.value} />}
        keyExtractor={(item) => item.key}
        numColumns={2}
      />
    </View>
  );
};

export default Home;
