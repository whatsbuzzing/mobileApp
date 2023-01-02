import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ActivityIcon from "./ActivityIcon";

const LocationCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Data");
      }}
    >
      <LinearGradient
        className="w-full h-[70px] bg-gradient-to-r from-[#0e0e0e] to-dark4 my-3 rounded-lg flex-row items-center space-x-[10px]"
        colors={["#191919", "#0e0e0e"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Image
          source={require("../assets/media/locations/stellenbosch.png")}
          className="h-[60px] w-[60px] rounded-lg ml-[5px]"
        />
        <View className="space-y-[4px]">
          <Text className="text-light text-xl">Stellenbosch</Text>
          <ActivityIcon size="regular" level="fire" />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LocationCard;
