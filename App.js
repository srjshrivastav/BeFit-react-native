import React from "react";
import { View } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";
export default function App() {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <History />
      </View>
    </Provider>
  );
}
