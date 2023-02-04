import React from "react";
import {
  PageImg,
  PageImgWrap,
  SnbPageRecommendContentStyled,
  ContentWrap,
  ButtonContentWrap,
  RoundButtonWrap,
} from "./SnbPageRecommendContentStyles";
import img from "@/public/images/avatar.png";
import P from "@/components/atoms/typography/p/P";
import RoundButton from "@/components/atoms/roundButton/RoundButton";
import Add from "@material-ui/icons/Add";

export interface Props {}

const SnbPageRecommendContent = ({ ...rest }: Props) => {
  return (
    <SnbPageRecommendContentStyled {...rest}>
      <PageImgWrap>
        <PageImg src={img} layout="fill" objectFit="cover" />
      </PageImgWrap>
      <ContentWrap>
        <P fontSize={16} bold>
          카카오페이 (kakaopay)
        </P>
        <P fontSize={12}>IT Services and IT Consulting</P>
        <P fontSize={12} color="grayPoint6">
          29,466 followers
        </P>
        <RoundButtonWrap>
          <RoundButton>
            <ButtonContentWrap>
              <Add style={{ fontSize: 20 }} />
              <P color="grayPoint6">Follow</P>
            </ButtonContentWrap>
          </RoundButton>
        </RoundButtonWrap>
      </ContentWrap>
    </SnbPageRecommendContentStyled>
  );
};
export default SnbPageRecommendContent;

export const defaultProps: Props = {};
SnbPageRecommendContent.defaultProps = {};
