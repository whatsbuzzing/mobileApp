import { View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const LengthIcon = (props) => {
  const { length } = props;
  return (
    <View
      className={`rounded-full h-1 bg-dark3`}
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
            ? "#12c2e9"
            : "#c471ed"
          }`,
          `${
            (length === "none" || length === "dead")
            ? "transparent"
            : (length === "short" || length === "chilled")
            ? "transparent"
            : (length === "medium" || length === "buzzing")
            ? "#c471ed"
            : "#f64f59"
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
        locations={
          (length === "none" || length === "dead")
          ? [0, 0.33, 0.66, 1]
          : (length === "short" || length === "chilled")
          ? [0, 0.30, 0.30, 0.30]
          : (length === "medium" || length === "buzzing")
          ? [0, 0.30, 0.60, 0.60]
          : [0, 0.33, 0.66, 1]
        }
      />
    </View>
  );
};

export default LengthIcon;
