import React from "react";
import { LabelStyled } from "./LabelStyles";

export interface Props {
  children?: JSX.Element | JSX.Element[] | string | number;
  color?: string;
}

const Label = ({ children, ...rest }: Props) => {
  return <LabelStyled children={children} {...rest}></LabelStyled>;
};
export default Label;

export const defaultProps: Props = {
  children: "Example",
};
Label.defaultProps = {};
