import React from "react";
import { View, Text, Slider, StyleSheet } from "react-native";
import { gray } from "../utils/colors";

export default function Sliders({ max, unit, step, value, onChange }) {
  return (
    <View styles={styles.row}>
      <Slider
        style={{ flex: 1 }}
        step={step}
        maximumValue={max}
        minimumValue={0}
        value={value}
        onValueChange={onChange}
      />
      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 22, textAlign: "center" }}>{value}</Text>
        <Text style={{ fontSize: 16, color: gray }}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "stretch",
  },
  metricCounter: {
    width: 85,
    justifyContent: "center",
  },
});
