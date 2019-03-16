/**
 * https://github.com/heytea/react-native-template-heytea
 *
 * @format
 */
import React, { Component } from "react";
import { Provider } from "mobx-react";
import { APPNavigator } from "./src/router_manager";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <APPNavigator />
      </Provider>
    );
  }
}
