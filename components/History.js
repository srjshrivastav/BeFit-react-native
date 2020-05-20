import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { receiveEntries, addEntry } from "../actions";
import { getDailyReminderValue, timeToString } from "../utils/helpers";
import { fetchCalenderResults } from "../utils/api";
import UdaciFitnessCalendar from "udacifitness-calendar-fix";

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
  renderItem = ({ today, ...metcrics }, formattedDate, key) => {
    <View>
      {today ? (
        <Text>{JSON.stringify(today)}</Text>
      ) : (
        <Text>{JSON.stringify(metcrics)}</Text>
      )}
    </View>;
  };
  renderEmptyDate(formattedDate) {
    return <Text>No data for today</Text>;
  }

  render() {
    const { entries } = this.props;
    return (
      <UdaciFitnessCalendar
        items={entries}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
      />
    );
  }
}
function mapStateToProps(entries) {
  return {
    entries,
  };
}

export default connect(mapStateToProps)(History);
