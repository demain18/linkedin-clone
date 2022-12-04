import React from "react";
import { InputStyled } from "./InputStyles";

export interface Props {}

const Input = ({ ...rest }: Props) => {
  return (
    <>
      <InputStyled placeholder="Example Content" />
    </>
  );
};
export default Input;

export const defaultProps: Props = {};
Input.defaultProps = {};
