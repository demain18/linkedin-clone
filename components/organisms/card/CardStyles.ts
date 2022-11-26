import styled, { css } from "styled-components";
import Image from "next/image";

export const CardStyled = styled.h1`
  max-width: 18.31rem;
  border-radius: 0.4rem;
  /* border: solid 1px #dadadb; */
  background-color: #fff;
  overflow: hidden;
  box-shadow: rgb(243 243 243 / 44%) 0px 5px 16px,
    rgb(24 24 43 / 3%) 0px 1.3478px 6px, rgb(0 0 0 / 3%) 0px 2.0217px 16.6957px;
`;

export const CardImageWrap = styled.div`
  width: 100%;
  height: 15rem;
  position: relative;
`;

export const CardImageStyled = styled(Image)``;
