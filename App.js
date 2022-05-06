import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import PostDetail from "./screens/PostDetail";
//

const Tab = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Details"
          component={PostDetail}
          // Override the title
          options={({ route }) => ({ title: route.params.title })}
          //
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
