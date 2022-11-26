import React from "react";
import styled from "styled-components";
import { LabelStyled, InputStyled } from "./FieldStyles";

export interface Props {}

export default function Field({ ...rest }: Props) {
  return (
    <div>
      <LabelStyled>LabelStyled</LabelStyled>
      <InputStyled placeholder="Placeholder Text" />
    </div>
  );
}

Field.defaultProps = {};
