import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbFunding";

export const SnbFundingStyled = styled.div<Props>`
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius}
  overflow: hidden;
`;
