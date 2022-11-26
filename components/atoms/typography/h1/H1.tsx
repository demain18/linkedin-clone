import React from "react";
import { HStyled } from "./H1Styles";

export interface Props {
  fontSize?: number;
  children?: string | number;
}

const H1 = ({ fontSize, children, ...rest }: Props) => {
  return (
    <HStyled fontSize={fontSize} {...rest}>
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
