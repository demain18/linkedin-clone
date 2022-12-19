import P from "@/components/atoms/typography/p/P";
import React, { Children, useEffect, useState } from "react";
import {
  DescWrap,
  SeeMore,
  TimelineDescriptionStyled,
} from "./TimelineDescriptionStyles";
import * as ReactDOMServer from "react-dom/server";

export interface Props {
  description: string;
  descriptionCharacters: number;
}

const TimelineDescription = ({
  description,
  descriptionCharacters,
  ...rest
}: Props) => {
  const [descriptionRes, setDescriptionRes] = useState<string>();
  const [descriptionMax, setDescriptionMax] = useState<number | undefined>(0);
  const [seeMore, setSeeMore] = useState<boolean>(false);

  useEffect(() => {
    if (description.length > descriptionCharacters) {
      setSeeMore(true);
    }
    setDescriptionRes(description);
  }, []);

  useEffect(() => {
    if (seeMore) {
      let descriptionResSliced = descriptionRes?.slice(
        0,
        descriptionCharacters
      );
      setDescriptionRes(descriptionResSliced);
      setDescriptionMax(descriptionResSliced?.split("\n").length);
    } else {
      setDescriptionRes(description);
    }
  }, [seeMore]);

  const seeMoreClick = () => {
    setSeeMore(!seeMore);
  };

  return (
    <TimelineDescriptionStyled {...rest}>
      <DescWrap>
        {descriptionRes?.split("\n").map((i, x) => {
          if (seeMore && x + 1 === descriptionMax) {
            return <P key={i + x}>{i + "..."}</P>;
          } else {
            return <P key={i + x}>{i}</P>;
          }
        })}
      </DescWrap>
      {seeMore && <SeeMore onClick={seeMoreClick}>see more</SeeMore>}
    </TimelineDescriptionStyled>
  );
};
export default TimelineDescription;

export const defaultProps: Props = {
  description:
    "토스페이먼츠 사업자등록 바로신청이 쉽고 간편한 이유!😁\n 토스페이먼츠는 사장님들이 사업을 쉽게 시작할 수 있도록, 사업에만 집중할 수 있도록, 도움을 드리기 위한 여러 가지 제품들을 만들고 있어요.\n 토스페이먼츠의 \"사업자등록 바로신청\" 도 그중 하나에요! PC와 모바일에서 5분 만에 사업자등록 신청을 할 수 있는 토스페이먼츠의 사업자등록 바로신청도 사장님들이 행정처리가 아닌 '사업'에 더 집중하실 수 있길 바라는 마음에서 만들었답니다.",
  descriptionCharacters: 100,
};
TimelineDescription.defaultProps = {
  description: defaultProps.description,
  descriptionCharacters: defaultProps.descriptionCharacters,
};
