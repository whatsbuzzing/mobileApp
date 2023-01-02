import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const LengthIcon = (props) => {
  const { level, size } = props;
  const [startPos, setStartPos] = useState(0);
  const [endPos, setEndPos] = useState(0);
  useEffect(() => {
    if (level === "dead") {
      setStartPos(0);
      setEndPos(0);
    } else if (level === "chilled") {
      setStartPos(0);
      setEndPos(0.33);
    } else if (level === "buzzing") {
      setStartPos(0.33);
      setEndPos(0.66);
    } else {
      setStartPos(0.66);
      setEndPos(0.99);
    }
  }, [level]);
  return (
    <View
      className={`rounded-full ${
        level === "dead" ? "border-[1px] border-solid border-dark2" : ""
      } ${size === "small" ? "h-1" : "h-2"}`}
    >
      <LinearGradient
        className="h-full w-full rounded-full"
        colors={[
          `${
            level === "dead"
              ? "transparent"
              : level === "chilled"
              ? "#12c2e9"
              : level === "buzzing"
              ? "#c471ed"
              : level === "fire"
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
