import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import LengthIcon from "./LengthIcon";

const DataCard = (props) => {
  const { club, activity, line_length, state, testing } = props;
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
            : club === "Die Mystic Boer"
            ? require(`../assets/media/clubs/mystics.png`)
            : require(`../assets/media/clubs/centraal.webp`)
        }
        // Development: Turn off in production
        // className={` w-[70px] rounded-[10px] ${(state !== "offline" || testing === true ) ? "h-[97px]" : "h-[75px]"}`}
        className={` w-[70px] rounded-[10px] ${state !== "offline" ? "h-[97px]" : "h-[75px]"}`}
      />
      <LinearGradient
        className="flex-1 rounded-[10px]"
        colors={["#191919", "#0e0e0e"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View className="flex-1 mx-2 my-1 justify-center">
          {/* Development: Turn off in production */}
          {/* {
            (state !== "offline" || testing === true) && (
              <>
                <Text className="text-light font-bold text-xl">{club}</Text>
                {
                  activity === "closed" && (
                    <Text className="text-dark1 font-bold">Closed</Text>
                  )
                }
                {
                  activity !== "closed" && (
                    <>
                      <View className="py-1">
                        <Text className="flex-1 text-dark1 font-medium">Fullness:</Text>
                        <View className="flex-1 pt-0.5">
                          <LengthIcon length={activity} size="small" />
                        </View>
                      </View>
                      <View className="py-1">
                        <Text className="flex-1 text-dark1 font-medium">Line length:</Text>
                        <View className="flex-1 pt-0.5">
                          <LengthIcon length={line_length} size="small" />
                        </View>
                      </View>
                    </>
                  )
                }
              </>
            )
          }
          {
            state === "offline" && testing === false && (
              <>
                <Text className="text-light font-bold text-xl">{club}</Text>
                <Text className=" text-dark1 font-medium">offline</Text>
              </>
            )
          } */}
          {/* Production: Turn off in development */}
          {
            state !== "offline" && (
              <>
                <Text className="text-light font-bold text-xl">{club}</Text>
                {
                  activity === "closed" && (
                    <Text className="text-dark1 font-bold">Closed</Text>
                  )
                }
                {
                  activity !== "closed" && (
                    <>
                      <View className="py-1">
                        <Text className="flex-1 text-dark1 font-medium">Fullness:</Text>
                        <View className="flex-1 pt-0.5">
                          <LengthIcon length={activity} size="small" />
                        </View>
                      </View>
                      <View className="py-1">
                        <Text className="flex-1 text-dark1 font-medium">Line length:</Text>
                        <View className="flex-1 pt-0.5">
                          <LengthIcon length={line_length} size="small" />
                        </View>
                      </View>
                    </>
                  )
                }
              </>
            )
          }
          {
            state === "offline" && (
              <>
                <Text className="text-light font-bold text-xl">{club}</Text>
                <Text className=" text-dark1 font-medium">offline</Text>
              </>
            )
          }
        </View>
      </LinearGradient>
    </View>
  );
};

export default DataCard;
