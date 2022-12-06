import React from "react";
import { PStyled } from "./PStyles";

export interface Props {
  children: string | number;
  fontSize?: number;
  bold?: boolean;
  color?: string;
}

const P = ({ children, fontSize, bold, color, ...rest }: Props) => {
  return (
    <PStyled fontSize={fontSize} bold={bold} color={color} {...rest}>
      {children}
    </PStyled>
  );
};
export default P;

export const defaultProps: Props = {
  children: "Test",
  fontSize: 16,
};

P.defaultProps = {
  children: defaultProps.children,
  fontSize: defaultProps.fontSize,
};
