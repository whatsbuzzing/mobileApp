import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import ActivityIcon from "./ActivityIcon";
import LengthIcon from "./LengthIcon";

const DataCard = (props) => {
  const { club, activity, line_length } = props;
  return (
    <View className="flex-row w-4/5 mx-auto space-x-[14px] my-3">
      <Image
        source={
          club === "Fool's Gold"
            ? require(`../assets/media/clubs/fools_gold.png`)
            : club === "De Lapa"
            ? require(`../assets/media/clubs/de_lapa.png`)
            : club === "Dorp"
            ? require(`../assets/media/clubs/dorp.png`)
            : require(`../assets/media/clubs/centraal.webp`)
        }
        className=" w-[67px] h-[75px] rounded-[10px]"
      />
      <LinearGradient
        className="flex-1 rounded-[10px]"
        colors={["#191919", "#0e0e0e"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View className="flex-1 mx-2 my-1">
          <Text className="text-light font-bold text-xl">{club}</Text>
          <View className="flex-row">
            <Text className="flex-1 text-dark2 font-medium">Activity:</Text>
            <View className="flex-1">
              <ActivityIcon size="small" level={activity} />
            </View>
          </View>
          <View className="flex-row items-center">
            <Text className="flex-1 text-dark2 font-medium">Line:</Text>
            <View className="flex-1">
              <LengthIcon length={line_length} size="small" />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default DataCard;
