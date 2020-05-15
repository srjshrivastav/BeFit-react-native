import React from "react";
import { View, Text } from "react-native";
import { getMetricInfo } from "./helpers";
export default class AddEntry extends React.Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  };

  incremenet = (metric) => {
    const { max, step } = getMetricInfo(metric);

    this.setState((state) => {
      const count = state[metric] + step;
      return {
        ...state,
        [metric]: count > max ? max : count,
      };
    });
  };
  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricInfo(metric).step;
      return {
        ...state,
        [metric]: count < 0 ? 0 : count,
      };
    });
  };

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }));
  };

  render() {
    return (
      <View>
        <Text>Hello In Entry</Text>
      </View>
    );
  }
}
