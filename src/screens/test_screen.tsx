import React from "react";

import { Button, Title, Icon, Container } from "native-base";

import { NavigationBar } from "../components";
import { NavigationUtil } from "../utils";

export const TestScreen = () => {
  return (
    <Container>
      <NavigationBar
        renderTitle={() => <Title>TestTitle</Title>}
        renderLeft={() => (
          <Button
            transparent
            onPress={() => {
              NavigationUtil.goBack();
            }}
          >
            <Icon name="arrow-back" />
          </Button>
        )}
      />
    </Container>
  );
};
