import TimelineDescription from "@/components/molecules/timeline/timelineDescription/TimelineDescription";
import TimelineEvents from "@/components/molecules/timeline/timelineEvents/TimelineEvents";
import TimelineImages from "@/components/molecules/timeline/timelineImages/TimelineImages";
import TimelineProfile from "@/components/molecules/timeline/timelineProfile/TimelineProfile";
import React, { useState } from "react";
import {
  EventsWrap,
  PaddingWrap,
  TimelineStyled,
  TimelineWrap,
} from "./TimelineStyles";
import { useQuery } from "react-query";
import { getTimelinePost } from "modules/api/apiRequest";
import { getTimelinePostDto } from "modules/api/apiRequest.dto";

export interface Props {}

export interface TimelinePostProps {}

const Timeline = ({ ...rest }: Props) => {
  let feedParam: number = 1;

  const { isLoading, error, data } = useQuery<getTimelinePostDto[]>(
    ["timelinePost", feedParam],
    () => getTimelinePost(feedParam)
  );

  console.log(data);

  return (
    <TimelineWrap>
      {data?.map((i, x) => {
        return (
          <TimelineStyled key={x + "key"} {...rest}>
            <PaddingWrap>
              <TimelineProfile
                avatarImg={i?.avatarImg}
                userName={i?.userName}
                companyUid={i?.companyUid}
                followers={i?.followers}
                datetime={i?.datetime}
              />
              <TimelineDescription desc={i?.desc} />
            </PaddingWrap>
            <TimelineImages images={i?.images} />
            <EventsWrap>
              <TimelineEvents />
            </EventsWrap>
          </TimelineStyled>
        );
      })}
    </TimelineWrap>
  );
};
export default Timeline;

export const defaultProps: Props = {};
Timeline.defaultProps = {};
