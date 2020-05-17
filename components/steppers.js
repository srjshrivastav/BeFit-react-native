import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { white, purple } from "../utils/colors";

export default function Stepper({ value, onIncrement, onDecrement, unit }) {
  return (
    <View style={[styles.row, { justifyContent: "space-between" }]}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.iosBtn} onPress={onDecrement}>
          <FontAwesome name="minus" size={30} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iosBtn} onPress={onIncrement}>
          <FontAwesome name="plus" size={30} color={"black"} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderRadius: 3,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
