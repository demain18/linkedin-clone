import React from "react";
import { PStyled } from "./PStyles";

export interface Props {
  children: string | number;
  fontSize?: number;
  bold?: boolean;
  color?: string;
}

const P = ({ children, ...rest }: Props) => {
  return <PStyled {...rest}>{children}</PStyled>;
};
export default P;

export const defaultProps: Props = {
  children: "this is pargraph.",
  fontSize: 16,
};

P.defaultProps = {
  children: defaultProps.children,
};
