import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen.js";
import DetailsScreen from "../screens/DetailsScreen.js";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8E1822",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#160B0D",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Inicio" }}
      />

      <Stack.Screen
        name="Detalles"
        component={DetailsScreen}
        options={{ title: "Detalles" }}
      />
    </Stack.Navigator>
  );
}
