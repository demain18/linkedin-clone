import React from "react";
import P from "../typography/p/P";
import { RoundButtonStyled } from "./RoundButtonStyles";

export interface Props {
  children?: JSX.Element | JSX.Element[] | string | number;
  full?: boolean;
  alignLeft?: boolean;
  color?: string;
}

const RoundButton = ({ children, full, alignLeft, ...rest }: Props) => {
  return (
    <RoundButtonStyled full={full} alignLeft={alignLeft} {...rest}>
      {children}
    </RoundButtonStyled>
  );
};
export default RoundButton;

export const defaultProps: Props = {
  children: (
    <P fontSize={16} color="grayPoint6">
      Round Button
    </P>
  ),
  color: "grayPoint9",
};
RoundButton.defaultProps = {
  children: defaultProps.children,
  color: defaultProps.color,
};
