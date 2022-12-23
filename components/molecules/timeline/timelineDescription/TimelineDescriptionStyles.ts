import { linkHover } from "@/styles/moduleStyles";
import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./TimelineDescription";

export const TimelineDescriptionStyled = styled.div`
  position: relative;
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Padding = styled.div`
  width: 100%;
  height: 17px;
`;

export const SeeMore = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-size: 14px;
  color: ${palette.grayPoint6};
  cursor: pointer;

  :hover {
    ${linkHover}
  }
`;
