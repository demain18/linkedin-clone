import styled, { css } from "styled-components";
import { Props } from "./Input";

export const InputStyled = styled.div`
  width: 100%;
  position: relative;
`;

export const InputTag = styled.input`
  width: 100%;
  line-height: 1.75;
  font-weight: 400;
  padding: 8px 16px;
  /* background-color: ${(props) => props.theme.lightGray}; */
  background-color: ${(props) => props.theme.primaryLight};
  border-radius: 0.4rem;
  border: none;

  ::placeholder {
    color: ${(props) => props.theme.grayPoint9};
    padding-left: 25px;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 9px;
  left: 15px;

  svg {
    font-size: 20px;
    color: ${(props) => props.theme.grayPoint6};
  }
`;
