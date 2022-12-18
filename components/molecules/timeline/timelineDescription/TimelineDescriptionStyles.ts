import { palette } from "@/styles/paletteStyles";
import styled, { css } from "styled-components";
import { Props } from "./TimelineDescription";

export const TimelineDescriptionStyled = styled.div``;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SeeMore = styled.div`
  font-size: 14px;
  color: ${palette.grayPoint6};
  cursor: pointer;

  :hover {
    color: ${palette.primary};
    text-decoration: underline;
  }
`;
