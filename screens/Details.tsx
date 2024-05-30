import { View, Text, Image, TextInput } from "react-native";
import React, { useEffect } from "react";
import BackNavigation from "@/components/BackNavigation";
import userPhoto from "@/assets/images/contactPhoto.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import InputWrapper from "@/components/InputWrapper";
import DetailsMenuTab from "@/components/DetailsMenuTab";
import useFetch from "@/hooks/useFetch";
import { Linking } from "react-native";
import { TouchableOpacity } from "react-native";

const Details = ({ route }: any) => {
  const { contactID, entreprise } = route.params;
  const { getContact, contact, isLoading } = useFetch();

  useEffect(() => {
    getContact(contactID);
  }, [contactID]);

  const handleEmailPress = (email: string) => {
    const mailtoUrl = `mailto:${email}`;
    Linking.openURL(mailtoUrl).catch((err) =>
      console.error("Error opening email:", err)
    );
  };

  const handlePhonePress = (phone: string) => {
    const telUrl = `tel:${phone}`;
    Linking.openURL(telUrl).catch((err) =>
      console.error("Error opening phone dialer:", err)
    );
  };

  return (
    <>
      {isLoading ? (
        <View>
          <Text>Loadings...</Text>
        </View>
      ) : (
        <View className="relative h-screen">
          <LinearGradient
            colors={["#2b5a75", "#2d99a8"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            className="w-full"
          >
            <BackNavigation theme="white" pageName="details" />
            <View className="w-full flex-row items-center justify-between p-4 pb-8">
              <View className="flex-row items-center">
                <Image
                  source={userPhoto}
                  className="w-[70px] h-[70px] rounded-full mr-3"
                />
                <View>
                  <Text className="text-white text-lg">
                    {contact?.contact.prenom} {contact?.contact.nom}
                  </Text>
                  <Text className="text-white opacity-50 text-xs">
                    {entreprise}
                  </Text>
                  <Text className="text-white opacity-50 text-xs">
                    {contact?.contact.e_mail}
                  </Text>
                  <Text className="text-white opacity-50 text-xs">
                    {contact?.contact.telephone_mobile}
                  </Text>
                </View>
              </View>
              <View className="flex-row">
                <TouchableOpacity
                  onPress={() => {
                    handleEmailPress(contact?.contact.e_mail);
                  }}
                  className="mr-3"
                >
                  <MaterialIcons name="mail-outline" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handlePhonePress(contact?.contact.telephone_mobile);
                  }}
                >
                  <MaterialIcons name="call" size={40} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>

          <View className="mt-5">
            {/* Here is The Body */}
            <InputWrapper value={contact?.contact.nom} label="nom" />
            <InputWrapper value={contact?.contact.prenom} label="prenom" />
            <InputWrapper value={contact?.contact.e_mail} label="adresse email">
              <TouchableOpacity
                onPress={() => {
                  handleEmailPress(contact?.contact.telephone_mobile);
                }}
              >
                <MaterialIcons name="mail-outline" size={20} color="white" />
              </TouchableOpacity>
            </InputWrapper>
            <InputWrapper
              value={contact?.contact.telephone_mobile}
              label="telephone mobile"
            >
              <TouchableOpacity
                onPress={() => {
                  handlePhonePress(contact?.contact.telephone_mobile);
                }}
              >
                <MaterialIcons name="call" size={20} color="white" />
              </TouchableOpacity>
            </InputWrapper>
            <InputWrapper
              value={contact?.contact.telephone_fixe}
              label="telephone fixe"
            >
              <TouchableOpacity
                onPress={() => {
                  handlePhonePress(contact?.contact.telephone_fixe);
                }}
              >
                <MaterialIcons name="call" size={20} color="white" />
              </TouchableOpacity>
            </InputWrapper>
          </View>
          <DetailsMenuTab currentPage="infos" />
        </View>
      )}
    </>
  );
};

export default Details;
