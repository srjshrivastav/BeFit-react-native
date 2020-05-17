import React from "react";
import { View } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
export default function App() {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <View>
        <AddEntry />
      </View>
    </Provider>
  );
}
