import React from "react";
import { StyleSheet, View } from "react-native";
import { inject, observer } from "mobx-react";
import { ITestStore } from "../stores/test_store";
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

interface IPorps {
  testStore: ITestStore;
}

export const Tab2Screen = inject("testStore")(
  observer((props: IPorps) => {
    const { count, addAction, subtractAction } = props.testStore;
    return (
      <Container>
        <NavigationBar renderTitle={() => <Title>Mobx example</Title>} />
        <View style={styles.conatiner}>
          <Text style={styles.text}>{count}</Text>
          <Button onPress={addAction} style={styles.button}>
            <Text>+</Text>
          </Button>
          <Button onPress={subtractAction} style={styles.button}>
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
  })
);
