import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import { purple, white } from "../utils/colors";

export default class Live extends React.Component {
  state = {
    coords: null,
    status: "undetermined",
    direction: "",
  };

  askPermission = () => {};

  render() {
    const { coords, status, direction } = this.state;
    if (status === null) {
      return <ActivityIndicator style={{ marginTop: 30 }} />;
    }
    if (status === "denied") {
      return (
        <View style={styles.center}>
          <Foundation name="alert" size={50} />
          <Text>
            Yoy denied your location.You can fix this by visiting your settings
            and enabling location services for this app.
          </Text>
        </View>
      );
    }
    if (status === "undetermined") {
      return (
        <View style={styles.center}>
          <Foundation name="alert" size={50} />
          <Text>You need to enable location services for this app.</Text>
          <TouchableOpacity onPress={this.askPermission} style={styles.button}>
            <Text style={styles.btnText}>Enable</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View>
        <Text>Live</Text>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: "center",
    borderRadius: 5,
    margin: 20,
  },
  btnText: {
    color: white,
    fontSize: 20,
  },
});
