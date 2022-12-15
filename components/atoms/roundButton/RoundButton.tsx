import React from "react";
import P from "../typography/p/P";
import { RoundButtonStyled } from "./RoundButtonStyles";

export interface Props {
  children?: JSX.Element | string | number;
}

const RoundButton = ({ children, ...rest }: Props) => {
  return <RoundButtonStyled {...rest}>{children}</RoundButtonStyled>;
};
export default RoundButton;

export const defaultProps: Props = {
  children: (
    <P fontSize={16} color="grayPoint6">
      Round Button
    </P>
  ),
};
RoundButton.defaultProps = {
  children: defaultProps.children,
};
