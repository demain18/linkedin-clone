import React from "react";
import { HStyled } from "./H1Styles";

export interface Props {
  children: string | number;
  fontSize?: number;
  bold?: boolean;
  color?: string;
}

const H1 = ({ children, fontSize, bold, color, ...rest }: Props) => {
  return (
    <HStyled fontSize={fontSize} bold={bold} color={color} {...rest}>
      {children}
    </HStyled>
  );
};
export default H1;

export const defaultProps: Props = {
  fontSize: 3,
  children: "This is header.",
};

H1.defaultProps = {
  fontSize: defaultProps.fontSize,
  children: defaultProps.children,
};
