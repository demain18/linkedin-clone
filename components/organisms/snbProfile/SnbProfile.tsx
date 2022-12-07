import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";
import SnbProfileButton from "@/components/molecules/snb/snbProfileButton/SnbProfileButton";
import SnbProfileHeader from "@/components/molecules/snb/snbProfileHeader/SnbProfileHeader";
import React from "react";
import {
  ButtonContentFlexWrap,
  Divider,
  DividerBottomGap,
  DividerTopGap,
  PremiumBadgeImage,
  PremiumBadgeImageWrap,
  PremiumWrap,
  SnbProfileStyled,
} from "./SnbProfileStyles";
import premiumBadgeImg from "@/public/images/premium-badge.png";

export interface Props {}

const SnbProfile = ({ ...rest }: Props) => {
  return (
    <SnbProfileStyled {...rest}>
      <SnbProfileHeader />

      <DividerBottomGap />

      <SnbProfileButton>
        <ButtonContentFlexWrap>
          <div>
            <P fontSize={12} color="grayPoint6" bold>
              Connections
            </P>
            <P fontSize={12} color="black">
              Grow your network
            </P>
          </div>
          <Span fontSize={12} color="primary" bold>
            37
          </Span>
        </ButtonContentFlexWrap>
      </SnbProfileButton>

      <SnbProfileButton>
        <ButtonContentFlexWrap>
          <P fontSize={12} color="grayPoint6" bold>
            Who's viewed your profile
          </P>

          <Span fontSize={12} color="primary" bold>
            26
          </Span>
        </ButtonContentFlexWrap>
      </SnbProfileButton>

      <DividerTopGap />

      <SnbProfileButton>
        <P fontSize={12} color="grayPoint6">
          Access exclusive tools & insights
        </P>
        <PremiumWrap>
          <PremiumBadgeImageWrap>
            <PremiumBadgeImage
              src={premiumBadgeImg}
              layout="fill"
              objectFit="cover"
            />
          </PremiumBadgeImageWrap>

          <P fontSize={12} bold>
            Get Hired Faster, Try Premium Free
          </P>
        </PremiumWrap>
      </SnbProfileButton>

      <Divider />

      <SnbProfileButton>My items</SnbProfileButton>
    </SnbProfileStyled>
  );
};
export default SnbProfile;

export const defaultProps: Props = {};
SnbProfile.defaultProps = {};
