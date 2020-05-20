import React from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { receiveEntries, addEntry } from "../actions";
import { getDailyReminderValue, timeToString } from "../utils/helpers";
import { fetchCalenderResults } from "../utils/api";
import UdaciFitnessCalendar from "udacifitness-calendar-fix";
import { white } from "../utils/colors";
import DateHeader from "./DateHeader";
import MetricCard from "./metricCard";

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
    return (
      <View style={styles.item}>
        {today ? (
          <View>
            <DateHeader date={formattedDate} />
            <Text style={styles.noDataText}>{today}</Text>
          </View>
        ) : (
          <TouchableOpacity onPress={() => console.log("pressed")}>
            <MetricCard metrics={metcrics} date={formattedDate} />
          </TouchableOpacity>
        )}
      </View>
    );
  };
  renderEmptyDate(formattedDate) {
    return (
      <View style={styles.item}>
        <DateHeader date={formattedDate} />
        <Text style={styles.noDataText}>
          You didn't log any data on this day.
        </Text>
      </View>
    );
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

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: 16,
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 17,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      height: 3,
      width: 0,
    },
  },
  noDataText: {
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
});

export default connect(mapStateToProps)(History);
