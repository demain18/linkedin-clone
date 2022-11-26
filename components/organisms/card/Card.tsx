import React from "react";
import CardHeader from "@/components/molecules/cardHeader/CardHeader";
import { CardStyled, CardImageWrap, CardImageStyled } from "./CardStyles";
import placeholder from "@/public/images/placeholder-image.jpeg";

export interface Props {
  avatarUri?: string;
  title?: string;
  datetime?: string;
}

const Card = ({ avatarUri, title, datetime, ...rest }: Props) => {
  return (
    <CardStyled {...rest}>
      <CardHeader avatarUri={avatarUri} title={title} datetime={datetime} />

      <CardImageWrap>
        <CardImageStyled src={placeholder} layout="fill" objectFit="cover" />
      </CardImageWrap>
    </CardStyled>
  );
};
export default Card;

Card.defaultProps = {};
