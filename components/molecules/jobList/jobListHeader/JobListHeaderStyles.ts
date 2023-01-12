import styled, { css } from "styled-components";
import { Props } from "./JobListHeader";

export const JobListHeaderStyled = styled.div<Props>`
  width: 100%;
  padding: 4px 8px;
  background-color: ${(props) => props.theme.primary};
`;
