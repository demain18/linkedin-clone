import { boxRadius } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyPostSnb";

export const CompanyPostSnbStyled = styled.div<Props>`
  padding: 16px;
  background-color: ${(props) => props.theme.white};
  ${boxRadius}
`;
