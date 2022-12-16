import React from "react";
import P from "../typography/p/P";
import { HoverButtonStyled } from "./HoverButtonStyles";

export interface Props {
  children?: JSX.Element | JSX.Element[];
}

const HoverButton = ({ children, ...rest }: Props) => {
  return <HoverButtonStyled {...rest}>{children}</HoverButtonStyled>;
};
export default HoverButton;

export const defaultProps: Props = {
  children: <P>Hover Button</P>,
};
HoverButton.defaultProps = {};
