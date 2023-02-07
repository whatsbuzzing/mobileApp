import { View, Text, TouchableHighlight } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationCard from "../components/LocationCard";
import firestore from "@react-native-firebase/firestore";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

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
          require("../assets/media/clubs/mystics.png"),
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
        <View className="flex-row items-center justify-between w-full mx-auto my-5">
          <Text className="text-light font-semibold text-3xl">Where to?</Text>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Help");
            }}
          >
            <Text className="text-dark2 text-sm font-medium">Help</Text>
          </TouchableHighlight>
        </View>
        {
          locations.map((location, index) =>
            (location.Location === "Stellenbosch" && location.Activity === "offline" &&
              (<View key={index}>
                <Text className="text-firePink font-semibold my-3">{location.Location} is currently offline. Live updates are only available between the hours of 6pm and 2am from Monday to Saturday.</Text>
              </View>)
            ))
        }
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
