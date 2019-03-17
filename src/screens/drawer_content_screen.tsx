import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView,DrawerItems } from "react-navigation";
import { Button, Text } from "native-base";
import { NavigationUtil } from "../utils";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export const DrawerContentScreen = () => {
  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Button
        onPress={() => {
          NavigationUtil.closeDrawer();
        }}
        style={{ alignSelf: "center" }}
      >
        <Text>返回</Text>
      </Button>
      <Button
        onPress={() => {
          NavigationUtil.navigate("Test");
        }}
        style={{ alignSelf: "center", marginTop: 20 }}
      >
        <Text>Navigate to test_screen</Text>
      </Button>
    </SafeAreaView>
  );
};
