import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DataCard from "../components/DataCard";
import { useNavigation } from "@react-navigation/native";

const DataScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-veryDark">
      <View className="h-1/3 w-full">
        <Image
          source={require("../assets/media/locations/stellenbosch.png")}
          className="h-full w-full"
        />
        <Text className="absolute text-light font-bold text-4xl h-1/3 left-3 bottom-5">
          Stellenbosch
        </Text>
      </View>
      <View className="flex-1 absolute bg-veryDark bottom-0 h-3/4 w-full rounded-t-[30px]">
        <View className="flex-row items-center justify-between w-4/5 mx-auto mt-4">
          <Text className="text-dark1 text-base">Places</Text>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Help");
            }}
          >
            <Text className="text-dark3 text-xs font-medium">Help</Text>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DataScreen;
