import React from "react";
import Avatar from "@/components/atoms/avatar/Avatar";
import Span from "@/components/atoms/typography/span/Span";
import { CardHeaderStyled, TitleWrap, DatetimeWrap } from "./CardHeaderStyles";

export interface Props {
  avatarUri?: string;
  title?: string;
  datetime?: string;
}

const CardHeader = ({ avatarUri, title, datetime, ...rest }: Props) => {
  return (
    <CardHeaderStyled {...rest}>
      <Avatar size="small" image={avatarUri} />

      <TitleWrap>
        <Span bold>{title}</Span>
      </TitleWrap>

      <DatetimeWrap>
        <Span color="gray2">{datetime}</Span>
      </DatetimeWrap>
    </CardHeaderStyled>
  );
};
export default CardHeader;

CardHeader.defaultProps = {};
