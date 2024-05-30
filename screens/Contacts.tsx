import Header from "@/components/Header";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AlphabetList } from "react-native-section-alphabet-list";
import userPhoto from "@/assets/images/contactPhoto.jpg";

import { useNavigation } from "@react-navigation/native";
import BackNavigation from "@/components/BackNavigation";
import SearchInput from "@/components/SearchInput";

const Contacts = () => {
  const { contacts, getContacts, isLoading, getSessionInfo } = useFetch();
  const navigation = useNavigation();

  useEffect(() => {
    getContacts();
    getSessionInfo();
  }, []);
  console.log(contacts);

  const transformedContacts = contacts?.map((contact) => ({
    key: contact.cle,
    value: `${contact.nom} ${contact.prenom}`,
    contactInfo: contact,
  }));

  return (
    <>
      {isLoading ? (
        <View>
          <Text>Loadings...</Text>
        </View>
      ) : (
        <View className="h-screen">
          <Header searchBar={true} />
          <BackNavigation pageName="contacts" />
          {contacts ? (
            <AlphabetList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={transformedContacts}
              indexLetterStyle={{
                fontSize: 11,
                marginBottom: 1,
              }}
              renderCustomItem={(item) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Details", {
                      contactID: item.contactInfo.cle,
                      entreprise: item.contactInfo.entreprise,
                    })
                  }
                  className="flex-row items-center justify-between w-full p-4 bg-white border-b-2 border-[#f6f7f8]"
                >
                  <View className="flex-row items-center">
                    <Image
                      source={userPhoto}
                      className="w-[50px] h-[50px] rounded-full mr-3"
                    />
                    <View>
                      <Text className="text-base font-medium opacity-80">
                        {item.value}
                      </Text>
                      <Text className="lowercase text-xs opacity-50">
                        @{item.contactInfo.prenom}
                        {item.contactInfo.nom}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              renderCustomSectionHeader={(section) => (
                <View className="p-2">
                  <Text className="text-xl opacity-50 font-medium">
                    {section.title}
                  </Text>
                </View>
              )}
            />
          ) : (
            <View className="flex-row justify-center items-center h-full">
              <Text>There is no contacts...</Text>
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default Contacts;
