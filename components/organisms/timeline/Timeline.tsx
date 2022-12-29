import TimelineDescription from "@/components/molecules/timeline/timelineDescription/TimelineDescription";
import TimelineEvents from "@/components/molecules/timeline/timelineEvents/TimelineEvents";
import TimelineImages from "@/components/molecules/timeline/timelineImages/TimelineImages";
import TimelineProfile from "@/components/molecules/timeline/timelineProfile/TimelineProfile";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import { EventsWrap, PaddingWrap, TimelineStyled } from "./TimelineStyles";
import img1 from "@/public/images/dummys/toss/one.png";
import img2 from "@/public/images/dummys/toss/two.png";
import img3 from "@/public/images/dummys/toss/three.png";
import img4 from "@/public/images/dummys/toss/four.png";
import img5 from "@/public/images/dummys/toss/five.png";
import { useQuery } from "react-query";
import { getTimelinePost } from "lib/apiRequest";
import { getTimelinePostDto } from "lib/apiRequest.dto";

export interface Props {}

export interface TimelinePostProps {
  avatarImg: StaticImageData;
  userName: string;
  followers: number;
  datetime: string;
  desc: string;
}

export interface GetTimelinePostProps {
  param: number;
}

const Timeline = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<getTimelinePostDto>(
    "timelinePost",
    getTimelinePost
  );
  console.log(data);

  const [imageList, setImageList] = useState<StaticImageData[]>([
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img1,
    img1,
  ]);

  return (
    <TimelineStyled {...rest}>
      <PaddingWrap>
        <TimelineProfile
          avatarImg={data?.avatarImg}
          userName={data?.userName}
          followers={data?.followers}
          datetime={data?.datetime}
        />
        <TimelineDescription desc={data?.desc} />
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
