import styled, { css } from "styled-components";
import { Props } from "./JobInfoDescription";

export const JobInfoDescriptionStyled = styled.div<Props>`
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.grayPoint8};
`;
