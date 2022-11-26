import React from "react";
import { SpanStyled } from "./SpanStyles";

export interface Props {
  bold?: boolean;
  color?: string;
  children?: string | number;
}

const Span = ({ bold, color, children, ...rest }: Props) => {
  return (
    <SpanStyled bold={bold} color={color} {...rest}>
      {children}
    </SpanStyled>
  );
};
export default Span;

export const defaultProps: Props = { children: "Span" };
Span.defaultProps = {
  children: defaultProps.children,
};
