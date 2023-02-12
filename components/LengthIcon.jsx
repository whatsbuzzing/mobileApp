import { View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const LengthIcon = (props) => {
  const { length, size } = props;
  return (
    <View
      className={`rounded-full ${
        length === "none" ? "border-[1px] border-solid border-dark2" : ""
      } ${size === "small" ? "h-1" : "h-2"}`}
    >
      <LinearGradient
        className="h-full w-full rounded-full"
        colors={[
          `${
            (length === "none" || length === "dead")
              ? "transparent"
              : "#12c2e9"
          }`,
          `${
            (length === "none" || length === "dead")
            ? "transparent"
            : (length === "short" || length === "chilled")
            ? "transparent"
            : "#c471ed"
          }`,
          `${
            (length === "none" || length === "dead")
            ? "transparent"
            : (length === "short" || length === "chilled")
            ? "transparent"
            : (length === "medium" || length === "buzzing")
            ? "transparent"
            : "#f64f59"
          }`
        ]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        locations={[0, 0.33, 0.7]}
      />
    </View>
  );
};

export default LengthIcon;
