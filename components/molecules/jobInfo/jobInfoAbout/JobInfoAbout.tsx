import P from "@/components/atoms/typography/p/P";
import { StaticImageData } from "next/image";
import React from "react";
import {
  CompanyButtonContentWrap,
  CompanyImgStyled,
  CompanyImgWrap,
  CompanyInfoWrap,
  CompanyWrap,
  JobInfoAboutStyled,
} from "./JobInfoAboutStyles";
import logo from "@/public/images/dummys/company/kakao_pay.png";
import RoundButton from "@/components/atoms/roundButton/RoundButton";
import { Add } from "@material-ui/icons";
import TimelineDescription from "../../timeline/timelineDescription/TimelineDescription";

export interface Props {
  companyLogoImg?: StaticImageData;
  companyName?: string;
  companyDesc?: string;
  followers?: number;
}

const JobInfoAbout = ({
  companyLogoImg,
  companyName,
  companyDesc,
  followers,
  ...rest
}: Props) => {
  return (
    <JobInfoAboutStyled {...rest}>
      <P fontSize={20}>About the company</P>
      <CompanyWrap>
        <CompanyImgWrap>
          <CompanyImgStyled
            src={companyLogoImg!}
            layout="fill"
            objectFit="cover"
          />
        </CompanyImgWrap>
        <CompanyInfoWrap>
          <P fontSize={16} bold>
            {companyName}
          </P>
          <P fontSize={14}>{followers}</P>
        </CompanyInfoWrap>
        <RoundButton>
          <CompanyButtonContentWrap>
            <Add style={{ fontSize: 20 }} />
            <P color="grayPoint6">Follow</P>
          </CompanyButtonContentWrap>
        </RoundButton>
      </CompanyWrap>
      <TimelineDescription desc={companyDesc} descMaxCharacters={50} />
    </JobInfoAboutStyled>
  );
};
export default JobInfoAbout;

export const defaultProps: Props = {
  companyLogoImg: logo,
  companyName: "카카오페이 (kakaopay)",
  companyDesc:
    "마음 놓고 금융하다 카카오페이\n여전히 금융생활에는 어렵고 번거로운 것들이 존재합니다.\n\n우리의 일은 기존의 관습을 깨고 보다 편리한 서비스를 제공하는 것입니다.\n누구나 돈을 주고받고, 언제 어디서나 결제하고, 쉽고 안전하게 인증하며, 다양한 금융상품으로 쉬운 제테크까지, 카카오페이로 생활 속 금융생활을 한눈에 볼 수 있도록 합니다.\n카카오페이는 금융의 수고로움을 줄이고 이로움을 키웁니다. 이로인해 잘 모으고, 잘 쓰고, 잘 가꾸도록 합니다.\n정보나 빈부의 격차 없이 언제 어디서나, 누구나 일상 속에서 가치 있는 흐름을 만들어나가는 것이 우리가 바라는 모습입니다.\n\n카카오페이는 현금이나 지갑이 없는 삶 cashless and walletless를 넘어 어렵고 번거로운 기존의 금융과는 완전히 다른 새로운 금융 effortless를 지향하는 생활금융 플랫폼입니다.\n\n마음 놓고 금융하는 세상을 만들어 가는 카카오페이에서 함께 목표를 이뤄나갈 미래 크루 분들을 영입합니다!",
  followers: 22961,
};
JobInfoAbout.defaultProps = {};
