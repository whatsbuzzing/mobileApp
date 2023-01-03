import { View, Text, TouchableHighlight, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import ActivityIcon from "../components/ActivityIcon";
import LengthIcon from "../components/LengthIcon";

const HelpScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-veryDark">
      <View className="w-[90%] mx-auto flex-row items-center justify-between my-5">
        <Text className="text-light font-semibold text-3xl">Help</Text>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Text className="text-dark2 text-xs">back</Text>
        </TouchableHighlight>
      </View>
      <Text className="w-[90%] mx-auto  text-dark1 text-xl">
        understanding the key
      </Text>
      <ScrollView className="w-[90%] mx-auto space-y-[36px] mt-10">
        <View className="space-y-[10px]">
          <ActivityIcon size="regular" level="fire" />
          <Text className="text-dark2 text-xs ml-20">
            It's in the name really...
          </Text>
        </View>
        <View className="space-y-[10px]">
          <ActivityIcon size="regular" level="buzzing" />
          <Text className="text-dark2 text-xs ml-20">
            There's a bit of a vibe but not much
          </Text>
        </View>
        <View className="space-y-[10px]">
          <ActivityIcon size="regular" level="chilled" />
          <Text className="text-dark2 text-xs ml-20">
            Now we're getting somewhere. There's a vibe, it's almost full
          </Text>
        </View>
        <View className="space-y-[10px]">
          <ActivityIcon size="regular" level="dead" />
          <Text className="text-dark2 text-xs ml-20">
            It's filled to the brim and the vibes are high
          </Text>
        </View>
        <View className="space-y-[10px]">
          <View className="w-1/3">
            <LengthIcon length="none" />
          </View>
          <Text className="text-dark2 text-xs ml-20">no line.</Text>
        </View>
        <View className="space-y-[10px]">
          <View className="w-1/3">
            <LengthIcon length="short" />
          </View>
          <Text className="text-dark2 text-xs ml-20">short line.</Text>
        </View>
        <View className="space-y-[10px]">
          <View className="w-1/3">
            <LengthIcon length="medium" />
          </View>
          <Text className="text-dark2 text-xs ml-20">medium-ish line.</Text>
        </View>
        <View className="space-y-[10px] mb-10">
          <View className="w-1/3">
            <LengthIcon length="long" />
          </View>
          <Text className="text-dark2 text-xs ml-20">
            long line. like very long. like why-did-I-come-out-this-late long
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
