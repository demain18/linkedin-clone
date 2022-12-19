import styled, { css } from "styled-components";
import { Props } from "./TimelineImages";
import Image from "next/image";

export const TimelineImagesStyled = styled.div<Props>``;

export const ImageWrapStyles = css`
  position: relative;
  width: 100%;
  height: 600px;
`;

export const ImageSingleWrap = styled.div`
  ${ImageWrapStyles}
`;

export const ImageDoubleWrap = styled.div`
  ${ImageWrapStyles}
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

export const ImageTripleWrap = styled.div`
  ${ImageWrapStyles}
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const ImageTripleDownWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 3px;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageOverPentaWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    filter: brightness(50%);
  }
`;

export const ImageOverPentaCountWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageStyled = styled(Image)``;
