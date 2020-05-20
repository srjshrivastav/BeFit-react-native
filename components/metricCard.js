import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DateHeader from "./DateHeader";
import { getMatriceInfo } from "../utils/helpers";
import { gray } from "../utils/colors";

export default function MetricCard({ date, metrics }) {
  return (
    <View>
      {date && <DateHeader date={date} />}
      {Object.keys(metrics).map((metric) => {
        const { getIcons, displayName, unit } = getMatriceInfo(metric);
        return (
          <View style={styles.metric} key={metric}>
            {getIcons()}
            <View>
              <Text style={{ fontSize: 20 }}>{displayName}</Text>
              <Text style={{ fontSize: 16, color: gray }}>
                {metrics[metric]} {unit}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  metric: {
    flexDirection: "row",
    marginTop: 12,
  },
});
