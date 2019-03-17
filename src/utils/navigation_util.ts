import {
  NavigationActions,
  StackActions,
  NavigationContainerComponent,
  NavigationParams,
  DrawerActions
} from "react-navigation";

let navigator: NavigationContainerComponent;

const setTopLevelNavigator = (navigatorRef: NavigationContainerComponent) => {
  navigator = navigatorRef;
};

const getNavigator = () => navigator;

const navigate = (routeName: string, params?: NavigationParams | undefined) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

const goBack = (pageKey?: string | null | undefined) => {
  navigator.dispatch(NavigationActions.back({ key: pageKey }));
};

const openDrawer = () => {
  navigator.dispatch(DrawerActions.openDrawer());
};

const closeDrawer = () => {
  navigator.dispatch(DrawerActions.closeDrawer())
}

const reset = (
  index: number,
  routeName: string,
  key?: string | null | undefined
) => {
  const resetAction = StackActions.reset({
    index,
    actions: [NavigationActions.navigate({ routeName })],
    key
  });
  navigator.dispatch(resetAction);
};

const replace = (routeName: string) => {
  navigator.dispatch(StackActions.replace({ routeName }));
};

export const NavigationUtil = {
  setTopLevelNavigator,
  getNavigator,
  openDrawer,
  closeDrawer,
  navigate,
  goBack,
  reset,
  replace
};
