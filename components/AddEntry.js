import React from "react";
import { View, Text, TouchableOpacity, Slider } from "react-native";
import { getMatriceInfo, timeToString } from "../utils/helpers";
import Sliders from "./sliders";
import Stepper from "./steppers";
import DateHeader from "./DateHeader";
import TextBtn from "./Textbtn";
import { Octicons } from "@expo/vector-icons";
import { submitEntry, removeEntry } from "../utils/api";

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Submit</Text>
    </TouchableOpacity>
  );
}

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
  submit = () => {
    const key = timeToString();
    const entry = this.state;

    submitEntry({ entry, key });
  };

  reset = () => {
    const key = timeToString();

    //update redux

    removeEntry(key);
  };
  render() {
    const metaInfo = getMatriceInfo();

    if (true) {
      return (
        <View>
          <Octicons name="thumbsup" size={40} />
          <Text>You already Logged your Information for today</Text>
          <TextBtn onPress={this.reset}>Reset</TextBtn>
        </View>
      );
    }

    return (
      <View>
        <DateHeader date={new Date().toLocaleDateString()} />
        {Object.keys(metaInfo).map((key) => {
          const { type, getIcons, ...rest } = metaInfo[key];
          const value = this.state[key];
          return (
            <View key={key}>
              {getIcons()}
              {type === "slider" ? (
                <Sliders
                  value={value}
                  onChange={(value) => this.slide(key, value)}
                  {...rest}
                />
              ) : (
                <Stepper
                  value={value}
                  onIncrement={this.incremenet}
                  onDecrement={this.decrement}
                  {...rest}
                />
              )}
            </View>
          );
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}
