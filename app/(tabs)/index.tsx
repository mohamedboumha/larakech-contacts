import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@/screens/Home";
import Contacts from "@/screens/Contacts";
import Details from "@/screens/Details";

const Stack = createStackNavigator();

function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
        initialParams={{ item: 12 }}
      />
    </Stack.Navigator>
  );
}

export default RootLayout;
