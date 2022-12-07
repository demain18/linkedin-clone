import { layoutWidth } from "@/styles/moduleStyles";
import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./SnbProfile";

export const SnbProfileStyled = styled.div<Props>`
  max-width: ${layoutWidth.snbProflie}px;
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const DividerGap = styled.div`
  width: 100%;
  height: 12px;
  background-color: #fff;
`;
