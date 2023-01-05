import { View, Text } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationCard from "../components/LocationCard";
import firestore from "@react-native-firebase/firestore";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

SplashScreen.preventAutoHideAsync();

const LocationScreen = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [locations, setLocations] = useState([]);

  function onResult(QuerySnapshot) {
    setLocations(QuerySnapshot.docs.map((doc) => doc.data()));
  }

  function onError(error) {
    console.error(error);
  }

  useEffect(() => {
    firestore().collection("Locations").onSnapshot(onResult, onError);

    async function loadResourcesAndDataAsync() {
      try {
        const imageAssets = cacheImages([
          require("../assets/media/locations/capetown.png"),
          require("../assets/media/locations/durban.png"),
          require("../assets/media/locations/stellenbosch.png"),
          require("../assets/media/locations/johannesburg.png"),
          require("../assets/media/clubs/centraal.webp"),
          require("../assets/media/clubs/de_lapa.png"),
          require("../assets/media/clubs/dorp.png"),
          require("../assets/media/clubs/fools_gold.png"),
        ]);

        await Promise.all([...imageAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView className="bg-veryDark flex-1" onLayout={onLayoutRootView}>
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
