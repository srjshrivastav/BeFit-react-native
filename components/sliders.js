import React from "react";
import { View, Text, Slider, StyleSheet } from "react-native";

export default function Sliders({ max, unit, step, value, onChange }) {
  return (
    <View>
      <Slider
        step={step}
        maximumValue={max}
        minimumValue={0}
        value={value}
        onValueChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
