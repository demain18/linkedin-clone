import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";
import SnbProfileButton from "@/components/molecules/snbProfile/snbProfileButton/SnbProfileButton";
import SnbProfileHeader from "@/components/molecules/snbProfile/snbProfileHeader/SnbProfileHeader";
import React, { useEffect, useState } from "react";
import {
  BookmarkWrap,
  ButtonContentFlexWrap,
  Divider,
  DividerBottomGap,
  DividerTopGap,
  MyitemContentWrap,
  PremiumBadgeImage,
  PremiumBadgeImageWrap,
  PremiumWrap,
  SnbProfileStyled,
} from "./SnbProfileStyles";
import premiumBadgeImg from "@/public/images/premium-badge.png";
import { Bookmark } from "@material-ui/icons";
import { useQuery } from "react-query";
import { getUserInfo } from "modules/api/apiRequest";
import { getUserInfoDto } from "modules/api/apiRequest.dto";

export interface Props {}

const SnbProfile = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<getUserInfoDto>(
    "userInfo",
    getUserInfo
  );

  return (
    <SnbProfileStyled {...rest}>
      <SnbProfileHeader
        title={data?.username}
        desc={data?.bio}
        bannerImg={data?.bannerImg}
        avatarImg={data?.avatarImg}
      />

      <DividerBottomGap />

      <SnbProfileButton>
        <ButtonContentFlexWrap>
          <div>
            <P fontSize={12} color="grayPoint6" bold>
              Connections
            </P>
            <P fontSize={12} color="black" bold>
              Grow your network
            </P>
          </div>
          <Span fontSize={12} color="primary" bold>
            {data?.connections.toLocaleString()}
          </Span>
        </ButtonContentFlexWrap>
      </SnbProfileButton>

      <SnbProfileButton>
        <ButtonContentFlexWrap>
          <P fontSize={12} color="grayPoint6" bold>
            Who's viewed your profile
          </P>

          <Span fontSize={12} color="primary" bold>
            {data?.viewed.toLocaleString()}
          </Span>
        </ButtonContentFlexWrap>
      </SnbProfileButton>

      <DividerTopGap />

      <SnbProfileButton jumbo>
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

      <SnbProfileButton>
        <MyitemContentWrap>
          <BookmarkWrap>
            <Bookmark style={{ fontSize: "16px" }} />
          </BookmarkWrap>
          <P fontSize={12} color="black" bold>
            My items
          </P>
        </MyitemContentWrap>
      </SnbProfileButton>
    </SnbProfileStyled>
  );
};
export default SnbProfile;

SnbProfile.defaultProps = {};
