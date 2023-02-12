import { View, Text } from "react-native";
import React from "react";

const StateIcon = (props) => {
  const { state } = props;
  return (
    <View className={`flex-row items-center space-x-1`}>
      <View
        className={`rounded-full w-3 h-3 ${
          state === "live"
            ? "bg-firePink"
            : state === "offline"
            ? "bg-dark4 border-solid border-[3px] border-dark3"
            : "hidden"
        }`}
      />
      <Text className="text-dark1 font-bold text-xs">{state}</Text>
    </View>
  );
};

export default StateIcon;
