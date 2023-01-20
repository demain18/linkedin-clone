import styled, { css } from "styled-components";
import { Props } from "./JobInfo";

export const JobInfoStyled = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
