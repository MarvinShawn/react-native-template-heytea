import React, { useState } from "react";

import { StyleSheet, View } from "react-native";

import { Button, Text, Title, Icon, Container } from "native-base";

import { NavigationBar } from "../components";
import { NavigationUtil } from "../utils";

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignSelf: "center",
    marginTop: 20
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export const Tab1Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <NavigationBar
        renderTitle={() => <Title>Hooks example</Title>}
        renderLeft={() => (
          <Button
            transparent
            onPress={() => {
              NavigationUtil.openDrawer();
            }}
          >
            <Icon name="md-menu" />
          </Button>
        )}
      />

      <View style={styles.conatiner}>
        <Text style={styles.text}>{count}</Text>
        <Button onPress={() => setCount(count + 1)} style={styles.button}>
          <Text>+</Text>
        </Button>
        <Button onPress={() => setCount(count - 1)} style={styles.button}>
          <Text>-</Text>
        </Button>
        <Button
          onPress={() => {
            NavigationUtil.navigate("Test");
          }}
          style={styles.button}
        >
          <Text>Navigate to test_screen</Text>
        </Button>
      </View>
    </Container>
  );
};
