import { layoutWidth } from "@/styles/moduleStyles";
import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./index";

export const Frame = styled.div<Props>`
  background-color: ${palette.background};
  height: calc(100vh - 55px);
`;

export const FrameWrap = styled.div`
  max-width: ${layoutWidth.main}px;
  margin: 0 auto;
  border: 1px solid gray;
`;
