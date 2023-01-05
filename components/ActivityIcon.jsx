import { View, Text } from "react-native";
import React from "react";

const ActivityIcon = (props) => {
  const { size, level } = props;
  return (
    <View className="flex-row space-x-[4px] items-center">
      <View
        className={`rounded-full ${size === "small" ? "w-3 h-3" : "w-4 h-4"} ${
          level === "fire"
            ? "bg-firePink"
            : level === "buzzing"
            ? "bg-buzzingPurple"
            : level === "chilled"
            ? "bg-chilledBlue"
            : level === "dead"
            ? "bg-veryDark border-solid border-[1px] border-dark2"
            : "hidden"
        }`}
      />
      <Text className="text-dark1 font-bold text-xs">{level}</Text>
    </View>
  );
};

export default ActivityIcon;
