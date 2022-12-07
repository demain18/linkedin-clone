import { layoutWidth } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbProfile";

export const SnbProfileStyled = styled.div<Props>`
  max-width: ${layoutWidth.snbProflie}px;
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
  /* border: 1px solid blue; */
`;
