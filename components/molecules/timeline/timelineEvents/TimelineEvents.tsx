import HoverButton from "@/components/atoms/hoverButton/HoverButton";

import P from "@/components/atoms/typography/p/P";
import React, { useState } from "react";
import {
  ButtonContent,
  ButtonWrap,
  TimelineEventsStyled,
} from "./TimelineEventsStyles";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import CommentOutlined from "@material-ui/icons/CommentOutlined";
import Cached from "@material-ui/icons/Cached";
import SendOutlined from "@material-ui/icons/SendOutlined";

export interface Props {}

const TimelineEvents = ({ ...rest }: Props) => {
  const [buttonList, setButtonList] = useState([
    {
      icon: <ThumbUpAltOutlined style={{ fontSize: 24 }} />,
      name: "Like",
    },
    {
      icon: <CommentOutlined style={{ fontSize: 24 }} />,
      name: "Comment",
    },
    {
      icon: <Cached style={{ fontSize: 24 }} />,
      name: "Repost",
    },
    {
      icon: <SendOutlined style={{ fontSize: 24 }} />,
      name: "Send",
    },
  ]);

  return (
    <TimelineEventsStyled {...rest}>
      <ButtonWrap>
        {buttonList.map((i, x) => (
          <HoverButton key={i.name + x} full>
            <ButtonContent>
              {i.icon}
              <P color="grayPoint6" fontSize={14} bold>
                {i.name}
              </P>
            </ButtonContent>
          </HoverButton>
        ))}
      </ButtonWrap>
    </TimelineEventsStyled>
  );
};
export default TimelineEvents;

export const defaultProps: Props = {};
TimelineEvents.defaultProps = {};
