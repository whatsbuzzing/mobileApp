import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const LengthIcon = (props) => {
  const { length, size } = props;
  const [startPos, setStartPos] = useState(0);
  const [endPos, setEndPos] = useState(0);
  useEffect(() => {
    if (length === "none") {
      setStartPos(0);
      setEndPos(0);
    } else if (length === "short") {
      setStartPos(0);
      setEndPos(0.33);
    } else if (length === "medium") {
      setStartPos(0.33);
      setEndPos(0.66);
    } else {
      setStartPos(0.66);
      setEndPos(0.99);
    }
  }, [length]);
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
            length === "none"
              ? "transparent"
              : length === "short"
              ? "#12c2e9"
              : length === "medium"
              ? "#c471ed"
              : length === "long"
              ? "#f64f59"
              : ""
          }`,
          "transparent",
        ]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        locations={[startPos, endPos]}
      />
    </View>
  );
};

export default LengthIcon;
