import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import {
  AuthLoadingScreen,
  Tab1Screen,
  Tab2Screen,
  Tab3Screen,
  LoginScreen
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

//页面主导航
const AppStack = createStackNavigator({
  MainTabs: Tab
});

// 身份认证
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
        screen: AppStack
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
