import React from "react";
import { View, Text } from "react-native";
import { getMatriceInfo } from "../utils/helpers";
import Slider from "./sliders";
import Stepper from "./steppers";
export default class AddEntry extends React.Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  };

  incremenet = (metric) => {
    const { max, step } = getMatriceInfo(metric);

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
      const count = state[metric] - getMatriceInfo(metric).step;
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
    const metaInfo = getMatriceInfo();

    return (
      <View>
        {Object.keys(metaInfo).map((key) => {
          const { type, getIcons, ...rest } = metaInfo[key];
          const value = this.state[key];
          return (
            <View key={key}>
              {getIcons()}
              {type === "slider" ? <Slider /> : <Stepper />}
            </View>
          );
        })}
      </View>
    );
  }
}
