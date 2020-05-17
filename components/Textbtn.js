import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function TextBtn({ chidren, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{chidren}</Text>
    </TouchableOpacity>
  );
}
