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
import { getCompanyName } from "modules/hooks/getCompanyName";

export interface Props {
  selectedCompany?: string;
}

const Timeline = ({ selectedCompany, ...rest }: Props) => {
  let feedParam: number = 1;

  const { isLoading, error, data } = useQuery<getTimelinePostDto[]>(
    ["timelinePost", feedParam],
    () => getTimelinePost(feedParam)
  );

  return (
    <TimelineWrap {...rest}>
      {!selectedCompany
        ? data?.map((i, x) => {
            return (
              <TimelineStyled key={x + "key"} {...rest}>
                <PaddingWrap>
                  <TimelineProfile
                    avatarImg={i.avatarImg}
                    userName={i.userName}
                    companyUid={i.companyUid}
                    followers={i.followers}
                    datetime={i.datetime}
                  />
                  <TimelineDescription desc={i.desc} />
                </PaddingWrap>
                {i.images.length > 0 && <TimelineImages images={i?.images} />}
                <EventsWrap>
                  <TimelineEvents />
                </EventsWrap>
              </TimelineStyled>
            );
          })
        : data
            ?.filter((i) => i.companyUid === selectedCompany)
            .map((i, x) => {
              return (
                <TimelineStyled key={x + "key"} {...rest}>
                  <PaddingWrap>
                    <TimelineProfile
                      avatarImg={i.avatarImg}
                      userName={i.userName}
                      companyUid={i.companyUid}
                      followers={i.followers}
                      datetime={i.datetime}
                    />
                    <TimelineDescription desc={i.desc} />
                  </PaddingWrap>
                  {i.images.length > 0 && <TimelineImages images={i?.images} />}
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

export const defaultProps: Props = {
  selectedCompany: "tossbank",
};
Timeline.defaultProps = {};
