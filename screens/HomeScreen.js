import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icons
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//

// Screens
import All from "./All";
import Cricket from "./Cricket";
import Entertainment from "./Entertainment";
//

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: "#62c1e0",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        headerTitleStyle: { fontWeight: "bold" },
      }}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "#ffffff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={All}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cricket"
        component={Cricket}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cricket" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Entertainment"
        component={Entertainment}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="perm-media" size={24} color={color} />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
