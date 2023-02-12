import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import StateIcon from "./StateIcon";

const LocationCard = (props) => {
  const { location, state, testing } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Data", {
          location: location,
          state: state,
          testing: testing,
        });
      }}
      className={
        state === "coming soon" ? "opacity-60" : ""
      }
      disabled={
        state === "coming soon" ? true : false
      }
    >
      <LinearGradient
        className="w-full h-[70px] bg-gradient-to-r from-[#0e0e0e] to-dark4 my-3 rounded-lg flex-row items-center space-x-[10px]"
        colors={["#191919", "#0e0e0e"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Image
          source={
            location === "Stellenbosch"
              ? require(`../assets/media/locations/stellenbosch.png`)
              : location === "Cape Town"
              ? require(`../assets/media/locations/capetown.png`)
              : location === "Durban"
              ? require(`../assets/media/locations/durban.png`)
              : require(`../assets/media/locations/johannesburg.png`)
          }
          className="h-[60px] w-[60px] rounded-lg ml-[5px]"
        />
        <View className="space-y-[4px]">
          <Text className="text-light text-xl">{location}</Text>
          <StateIcon state={state} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LocationCard;
