import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { purple } from "../utils/colors";

export default function TextBtn({ chidren, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{chidren}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  reset: {
    textAlign: "center",
    color: purple,
  },
});
