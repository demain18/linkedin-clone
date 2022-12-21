import P from "@/components/atoms/typography/p/P";
import React, { Children, useEffect, useState } from "react";
import {
  DescWrap,
  Padding,
  SeeMore,
  TimelineDescriptionStyled,
} from "./TimelineDescriptionStyles";
import * as ReactDOMServer from "react-dom/server";

export interface Props {
  desc?: string;
  descMaxCharacters: number;
}

const TimelineDescription = ({ desc, descMaxCharacters, ...rest }: Props) => {
  const [descData, setDescData] = useState<string>();
  const [descTempMax, setDescTempMax] = useState<number | undefined>(0);
  const [descToggle, setDescToggle] = useState<boolean>(false);

  useEffect(() => {
    if (desc) {
      if (desc!.length > descMaxCharacters) {
        setDescToggle(true);
      }
    }
    setDescData(desc);
  }, [desc]);

  useEffect(() => {
    if (descToggle) {
      let descRes = descData?.slice(0, descMaxCharacters);
      setDescData(descRes);
      setDescTempMax(descRes?.split("\n").length);
    } else {
      setDescData(desc);
    }
  }, [descToggle]);

  const seeMoreClick = () => {
    setDescToggle(!descToggle);
  };

  return (
    <TimelineDescriptionStyled {...rest}>
      <DescWrap>
        {descData?.split("\n").map((i, x) => {
          return descToggle && x + 1 === descTempMax ? (
            <P key={i + x}>{i + "..."}</P>
          ) : (
            <P key={i + x}>{i}</P>
          );
        })}
      </DescWrap>
      {descToggle && (
        <>
          <Padding />
          <SeeMore onClick={seeMoreClick}>see more</SeeMore>
        </>
      )}
    </TimelineDescriptionStyled>
  );
};
export default TimelineDescription;

export const defaultProps: Props = {
  desc: "토스페이먼츠 사업자등록 바로신청이 쉽고 간편한 이유!😁\n 토스페이먼츠는 사장님들이 사업을 쉽게 시작할 수 있도록, 사업에만 집중할 수 있도록, 도움을 드리기 위한 여러 가지 제품들을 만들고 있어요.\n 토스페이먼츠의 \"사업자등록 바로신청\" 도 그중 하나에요! PC와 모바일에서 5분 만에 사업자등록 신청을 할 수 있는 토스페이먼츠의 사업자등록 바로신청도 사장님들이 행정처리가 아닌 '사업'에 더 집중하실 수 있길 바라는 마음에서 만들었답니다.",
  descMaxCharacters: 100,
};
TimelineDescription.defaultProps = {
  descMaxCharacters: defaultProps.descMaxCharacters,
};
