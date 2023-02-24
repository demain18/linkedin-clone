import React from "react";
import { SpanStyled } from "./SpanStyles";

export interface Props {
  children: string | number;
  fontSize?: number;
  bold?: boolean;
  color?: string;
}

const Span = ({ children, fontSize, bold, color, ...rest }: Props) => {
  return (
    <SpanStyled fontSize={fontSize} bold={bold} color={color} {...rest}>
      {children}
    </SpanStyled>
  );
};
export default Span;

export const defaultProps: Props = { children: "Test", fontSize: 16 };
Span.defaultProps = {
  children: defaultProps.children,
};
