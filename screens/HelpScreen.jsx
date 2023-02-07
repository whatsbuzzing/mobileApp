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
      <ScrollView className="w-[90%] mx-auto space-y-[36px] my-4"
      showsVerticalScrollIndicator={false}>
        <View className="space-y-[30px]">
          <Text className="text-dark1 text-2xl">what is this?</Text>
          <Text className="text-dark1 text-sm text-justify">
            whatsbuzzing allows you to see the vibe of
            stellies from your phone without having to
            go to town to check for yourself. we tell you exactly how long the lines are and
            how full every club is so that you can make the right decisions -
            all the time.
          </Text>
        </View>
        <View className="space-y-[30px]">
          <Text className="text-dark1 text-2xl">when are we online?</Text>
          <Text className="text-dark1 text-sm text-justify">
            although we have not officially launched yet, we plan to be online monday night to saturday night, 6pm to 2am.
          </Text>
        </View>
        <View className="space-y-[30px]">
          <Text className="text-dark1 text-2xl">contact and support</Text>
          <View className="space-y-[16px]">
            <Text className="text-dark1 text-sm text-justify">
            there are three methods that you can use to get into contact with us. you can either email us at our support or information desks, or get in touch with us over on instagram:
            </Text>
            <View className="space-y-[4px]">
            <Text className="text-dark1 text-sm text-justify font-bold">
            support@whatsbuzzing.app
            </Text>
            <Text className="text-dark1 text-sm text-justify font-bold">
            info@whatsbuzzing.app
            </Text>
            <Text className="text-dark1 text-sm text-justify font-bold">
            instagram.com/whatsbuzzingapp
            </Text>
            </View>
            <Text className="text-dark1 text-sm text-justify">
            we highly suggest you follow us on instagram, where we offer live support and keep you updated with any changes to the app. we'll also do some cool stuff with rewards and show you live updates from the streets of stellies (and more soon).
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
