import styled, { css } from "styled-components";
import { Props } from "./Field";

export const LabelStyled = styled.div`
  font-size: 0.813rem;
  font-weight: bold;
  color: rgba(51, 51, 51, 0.87);
  margin-bottom: 0.3rem;
`;

export const InputStyled = styled.input`
  padding: 0.62rem 1.06rem;
  border-radius: 4px;
  border: solid 1px #dededf;
  background-color: #fff;

  ::placeholder {
    color: #b5b5b5;
  }
`;
