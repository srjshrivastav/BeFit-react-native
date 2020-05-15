import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function Stepper({
  value,
  onIncrement,
  onDecremnet,
  max,
  unit,
  step,
}) {
  return (
    <View>
      <TouchableOpacity onPress={onDecremnet}>
        <FontAwesome name="minus" size={30} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="plus" size={30} color={"black"} />
      </TouchableOpacity>
    </View>
  );
}
