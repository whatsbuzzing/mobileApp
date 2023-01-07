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
      <ScrollView className="w-[90%] mx-auto space-y-[36px] my-4">
        <View className="space-y-[30px]">
          <Text className="text-dark1 text-2xl">what is this???</Text>
          <Text className="text-dark1 text-sm text-justify">
            we all know the feeling of being stuck in the line outside of
            fool's, with the rest of our mates inside, wishing we'd just come 10
            minutes earlier... what's buzzing allows you to see the vibe of
            stellies (and more in the future) from your phone without having to
            go to town yourself. we tell you exactly how long the lines are and
            how full every club is so that you can make the right decisions -
            all the time.
          </Text>
        </View>
        <View className="space-y-[30px]">
          <Text className="text-dark1 text-2xl">When are we online?</Text>
          <Text className="text-dark1 text-sm text-justify">
            monday night to saturday night. 6pm to 2am.
          </Text>
        </View>
        {/* <View className="space-y-[30px]">
          <Text className="text-dark1 text-2xl">support</Text>
          <View className="space-y-[16px]">
            <Text className="text-dark1 text-sm text-justify">
              for any customer support you can email us, whatsapp us, or send us
              a dm on instagram and we’ll get back to you within minutes (try
              us).
            </Text>
            <Text className="text-dark1 text-sm text-justify">
              blah blah blah
            </Text>
          </View>
        </View>
        <View className="space-y-[30px]">
          <Text className="text-dark1 text-2xl">contact</Text>
          <View className="space-y-[16px]">
            <Text className="text-dark1 text-sm text-justify">
              for any general contact needs you can email us at
            </Text>
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
