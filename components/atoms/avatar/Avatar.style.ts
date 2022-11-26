import Image from "next/image";
import styled, { css } from "styled-components";
import { palette } from "../../../styles/paletteStyles";
import { Props } from "./Avatar";

const sizes = {
  large: {
    width: "4rem",
    height: "4rem",
  },
  medium: {
    width: "2.75rem",
    height: "2.75rem",
  },
  small: {
    width: "1.87rem",
    height: "1.87rem",
  },
};

export const AvatarStyled = styled.div<Props>`
  width: ${(prop) => sizes[prop.size as keyof typeof sizes].width};
  height: ${(prop) => sizes[prop.size as keyof typeof sizes].height};
  border-radius: 100%;
  background-color: ${palette.lightGray};
  overflow: hidden;
`;

export const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
