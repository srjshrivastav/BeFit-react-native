import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { receiveEntries, addEntry } from "../actions";
import { getDailyReminderValue, timeToString } from "../utils/helpers";

import { fetchCalenderResults } from "../utils/api";

class History extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    fetchCalenderResults()
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({ entries }) => {
        if (!entries[timeToString()])
          dispatch(
            addEntry({
              [timeToString()]: getDailyReminderValue(),
            })
          );
      });
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props.entries)}</Text>
      </View>
    );
  }
}
function mapStateToProps(entries) {
  return {
    entries,
  };
}

export default connect(mapStateToProps)(History);
