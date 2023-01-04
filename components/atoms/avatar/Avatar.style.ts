import Image from "next/image";
import styled, { css } from "styled-components";

import { Props } from "./Avatar";

export const AvatarStyled = styled.div<Props>`
  position: relative;

  width: ${(prop) => prop.size}px;
  height: ${(prop) => prop.size}px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.lightGray};
  overflow: hidden;
`;

export const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
