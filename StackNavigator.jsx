import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocationScreen from "./screens/LocationScreen";
import DataScreen from "./screens/DataScreen";
import KeyScreen from "./screens/KeyScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Data"
        component={DataScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Key"
        component={KeyScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
