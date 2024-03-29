import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DataCard from "../components/DataCard";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";

const DataScreen = ({ route }) => {
  const navigation = useNavigation();
  const { location, state, testing } = route.params;
  let locationId = "";
  if (location === "Stellenbosch") {
    locationId = "RLXjwXjhCjU60xmGRvxS";
  }
  const [clubs, setClubs] = useState([]);

  function onResult(QuerySnapshot) {
    setClubs(QuerySnapshot.docs.map((doc) => doc.data()));
  }

  function onError(error) {
    console.error(error);
  }

  useEffect(() => {
    firestore()
      .collection("Locations")
      .doc(locationId)
      .collection(`${location}_Clubs`)
      .orderBy('ActivityVal', 'desc')
      .onSnapshot(onResult, onError);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-veryDark">
      <View className="h-1/3 w-full">
        <Image
          source={require("../assets/media/locations/stellenbosch.png")}
          className="h-full w-full"
        />
        <TouchableHighlight
          onPress={() => navigation.goBack()}
          className="absolute top-5 right-[5%]"
        >
          <Text className="text-light text-xs">back</Text>
        </TouchableHighlight>
        <Text className="absolute text-light font-bold text-4xl h-1/3 left-3 bottom-5">
          {location}
        </Text>
      </View>
      <View className="flex-1 absolute bg-veryDark bottom-0 h-3/4 w-full rounded-t-[30px]">
        <View className="flex-row items-center justify-between w-4/5 mx-auto mt-4">
          <Text className="text-dark1 text-base">Places</Text>
        </View>
        {/* Development: Turn off in production */}
        {/* {
          testing === true && (
            <Text className="text-buzzingPurple font-semibold py-4 w-4/5 mx-auto flex-1">Currently Testing</Text>
          )
        } */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {clubs.map((club, index) => (
            <DataCard
              key={index}
              club={club.Club}
              activity={club.Activity}
              line_length={club.Line_length}
              state={state}
              testing={testing}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DataScreen;
