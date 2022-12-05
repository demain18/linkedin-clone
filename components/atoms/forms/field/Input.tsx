import React from "react";
import { InputStyled } from "./InputStyles";

export interface Props {
  placeholder: string;
}

const Input = ({ placeholder, ...rest }: Props) => {
  return (
    <>
      <InputStyled placeholder={placeholder} />
    </>
  );
};
export default Input;

export const defaultProps: Props = {
  placeholder: "Testing Text",
};
Input.defaultProps = { placeholder: defaultProps.placeholder };
