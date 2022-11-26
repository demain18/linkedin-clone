import React from "react";
import styled from "styled-components";
import { ButtonStyled } from "./ButtonStyles";

export interface Props {
  children?: JSX.Element | string | number;
}

const Button = ({ children, ...rest }: Props) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};
export default Button;

export const defaultProps: Props = {
  children: "Button",
};

Button.defaultProps = {
  children: defaultProps.children,
};
