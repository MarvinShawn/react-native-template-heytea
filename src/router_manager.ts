import React from "react";

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import {
  AuthLoadingScreen,
  Tab1Screen,
  Tab2Screen,
  Tab3Screen,
  LoginScreen,
  TestScreen,
  DrawerContentScreen
} from "./screens";

const Tab = createBottomTabNavigator({
  tab1: {
    screen: Tab1Screen
  },
  tab2: {
    screen: Tab2Screen
  },
  tab3: {
    screen: Tab3Screen
  }
});

//栈导航
const AppStack = createStackNavigator(
  {
    MainTabs: Tab,
    Test: TestScreen
  },
  {
    headerMode: "none"
  }
);

//抽屉导航
const DrawerStack = createDrawerNavigator(
  {
    AppMain: {
      screen: AppStack
    },
    Drawer01: {
      screen: TestScreen
    }
  },
  {
    initialRouteName: "AppMain",
    drawerPosition: "left",
    contentComponent: DrawerContentScreen
  }
);

// Auth
const AuthStack = createStackNavigator(
  {
    Login: LoginScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

// APPNavigator
export const APPNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: {
        screen: DrawerStack
      },
      Auth: {
        screen: AuthStack
      }
    },
    {
      initialRouteName: "App"
    }
  )
);
