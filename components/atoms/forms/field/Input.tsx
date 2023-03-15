import React from "react";
import { IconWrap, InputStyled, InputTag } from "./InputStyles";
import { SearchOutlined } from "@material-ui/icons";

export interface Props {
  placeholder: string;
}

const Input = ({ placeholder, ...rest }: Props) => {
  return (
    <InputStyled>
      <InputTag placeholder={placeholder} />
      <IconWrap>
        <SearchOutlined />
      </IconWrap>
    </InputStyled>
  );
};
export default Input;

export const defaultProps: Props = {
  placeholder: "Test",
};
Input.defaultProps = {};
