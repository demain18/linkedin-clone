import React from "react";
import { StaticImageData } from "next/image";
import { AvatarStyled, ImageStyled } from "./Avatar.style";

export interface Props {
  size?: number;
  image?: StaticImageData | string;
}

const Avatar = ({ size, image, ...rest }: Props) => {
  return (
    <AvatarStyled size={size} {...rest}>
      {image && <ImageStyled src={image} layout="fill" objectFit="cover" />}
    </AvatarStyled>
  );
};
export default Avatar;

export const defaultProps: Props = {
  size: 40,
};

Avatar.defaultProps = {
  size: defaultProps.size,
};
