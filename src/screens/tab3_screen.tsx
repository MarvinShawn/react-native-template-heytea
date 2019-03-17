import React from "react";
import { Title, Container } from "native-base";
import { NavigationBar } from "../components";
export const Tab3Screen = () => {
  return (
    <Container>
      <NavigationBar renderTitle={() => <Title>Title3</Title>} />
    </Container>
  );
};
