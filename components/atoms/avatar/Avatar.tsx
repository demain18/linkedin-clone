import React from "react";
import { StaticImageData } from "next/image";
import { AvatarStyled, ImageStyled } from "./Avatar.style";

export interface Props {
  size?: string;
  image?: string | StaticImageData;
}

const Avatar = ({ size, image, ...rest }: Props) => {
  return (
    <AvatarStyled size={size} {...rest}>
      {image && <ImageStyled src={image} width={100} height={100} />}
    </AvatarStyled>
  );
};
export default Avatar;

export const defaultProps: Props = {
  size: "medium",
};

Avatar.defaultProps = {
  size: defaultProps.size,
};
