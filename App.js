import React from "react";
import { View, Platform, StatusBar } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { purple, white } from "./utils/colors";
import Constants from "expo-constants";
import Live from "./components/Live";
import { setLocalNotification } from "./utils/helpers";

function UdacityStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = createMaterialTopTabNavigator();

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <NavigationContainer>
        <Provider store={createStore(reducer)}>
          <UdacityStatusBar backgroundColor={purple} barStyle="light-content" />
          <Tabs.Navigator
            tabBarOptions={{
              activeTintColor: white,
              labelStyle: {
                fontSize: 15,
              },
              style: {
                height: 56,
                backgroundColor: Platform.OS == "ios" ? white : purple,
                shadowColor: "rgba(0,0,0,0.24)",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
              },
            }}
          >
            <Tabs.Screen name="History" component={History} />
            <Tabs.Screen name="AddEntry" component={AddEntry} />
            <Tabs.Screen name="Live" component={Live} />
          </Tabs.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}
