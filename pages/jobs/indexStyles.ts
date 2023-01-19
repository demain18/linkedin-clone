import styled, { css } from "styled-components";
import { Props } from "./index";

export const GlobalWrap = styled.div`
  width: 100%;
  border: 1px solid blue;
  display: flex;
`;

export const JobListWrap = styled.div`
  width: 450px;
`;

export const JobInfoWrap = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
