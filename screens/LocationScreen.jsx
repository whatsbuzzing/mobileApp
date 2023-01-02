import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationCard from "../components/LocationCard";

const LocationScreen = () => {
  return (
    <SafeAreaView className="bg-veryDark flex-1">
      <View className=" px-10">
        <Text className="text-light font-semibold text-3xl my-5">
          Where we heading?
        </Text>
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;
