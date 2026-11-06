import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen.js";
import DetailsScreen from "../screens/DetailsScreen.js";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8E1822",
        },
        headerTintColor: "#FFFFFF",
        tabBarStyle: {
          backgroundColor: "#291316",
          borderTopColor: "#6D2028",
        },
        tabBarActiveTintColor: "#FF4545",
        tabBarInactiveTintColor: "#B58A8A",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />),
          }}
      />

      <Tab.Screen
        name="Detalles"
        component={DetailsScreen}
        options={{  title: 'Detalles',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
