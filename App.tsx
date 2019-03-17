/**
 * https://github.com/heytea/react-native-template-heytea
 *
 * @format
 */
import React, { Component } from "react";
import { Provider } from "mobx-react";
import { APPNavigator } from "./src/router_manager";
import { NavigationUtil } from "./src/utils";
import {mainStore} from "./src/stores"

export default class App extends Component {
  render() {
    return (
      <Provider {...mainStore}>
        <APPNavigator
          ref={navigatorRef => {
            if (navigatorRef) {
              NavigationUtil.setTopLevelNavigator(navigatorRef);
            }
          }}
        />
      </Provider>
    );
  }
}
