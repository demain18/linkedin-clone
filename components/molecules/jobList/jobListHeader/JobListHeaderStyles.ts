import styled, { css } from "styled-components";
import { Props } from "./JobListHeader";

export const JobListHeaderStyled = styled.div<Props>`
  width: 100%;
  padding: 8px;
  background-color: ${(props) => props.theme.primary};
  position: sticky;
  top: 0px;
  z-index: 3;

  p {
    color: #fff;
  }
`;
