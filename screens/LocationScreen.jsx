import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationCard from "../components/LocationCard";
import firestore from "@react-native-firebase/firestore";

const LocationScreen = () => {
  const [locations, setLocations] = useState([]);

  function onResult(QuerySnapshot) {
    setLocations(QuerySnapshot.docs.map((doc) => doc.data()));
  }

  function onError(error) {
    console.error(error);
  }

  useEffect(() => {
    firestore().collection("Locations").onSnapshot(onResult, onError);
  }, []);

  return (
    <SafeAreaView className="bg-veryDark flex-1">
      <View className=" px-10">
        <Text className="text-light font-semibold text-3xl my-5">
          Where we heading?
        </Text>
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            location={location.Location}
            activity={location.Activity}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;
