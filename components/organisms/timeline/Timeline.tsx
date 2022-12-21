import TimelineDescription from "@/components/molecules/timeline/timelineDescription/TimelineDescription";
import TimelineEvents from "@/components/molecules/timeline/timelineEvents/TimelineEvents";
import TimelineImages from "@/components/molecules/timeline/timelineImages/TimelineImages";
import TimelineProfile from "@/components/molecules/timeline/timelineProfile/TimelineProfile";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import { EventsWrap, PaddingWrap, TimelineStyled } from "./TimelineStyles";
import img1 from "@/public/images/dummys/toss/1.png";
import img2 from "@/public/images/dummys/toss/2.png";
import img3 from "@/public/images/dummys/toss/3.png";
import img4 from "@/public/images/dummys/toss/4.png";
import img5 from "@/public/images/dummys/toss/5.png";

export interface Props {}

const Timeline = ({ ...rest }: Props) => {
  const [imageList, setImageList] = useState<StaticImageData[]>([
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
  ]);

  return (
    <TimelineStyled {...rest}>
      <PaddingWrap>
        <TimelineProfile />
        <TimelineDescription />
      </PaddingWrap>
      <TimelineImages images={imageList} overPenta />
      <EventsWrap>
        <TimelineEvents />
      </EventsWrap>
    </TimelineStyled>
  );
};
export default Timeline;

export const defaultProps: Props = {};
Timeline.defaultProps = {};
