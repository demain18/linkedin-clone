import React from "react";
import { PStyled } from "./PStyles";

export interface Props {
  children?: string | number;
}

const P = ({ children, ...rest }: Props) => {
  return <PStyled {...rest}>{children}</PStyled>;
};
export default P;

export const defaultProps: Props = { children: "this is pargraph." };

P.defaultProps = {
  children: defaultProps.children,
};
