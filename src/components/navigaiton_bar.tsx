import React from "react";

import { Header, Left, Body, Right } from "native-base";

interface JSXFunc {
  (): JSX.Element;
}

interface IProps {
  renderLeft?: JSXFunc;
  renderTitle?: JSXFunc;
  renderRight?: JSXFunc;
}

export const NavigationBar = (props: IProps) => {
  return (
    <Header>
      <Left>{props.renderLeft ? props.renderLeft() : null}</Left>
      <Body>{props.renderTitle ? props.renderTitle() : null}</Body>
      <Right>{props.renderRight ? props.renderRight() : null}</Right>
    </Header>
  );
};
