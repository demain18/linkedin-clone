import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";
import SnbProfileButton from "@/components/molecules/snb/snbProfileButton/SnbProfileButton";
import SnbProfileHeader from "@/components/molecules/snb/snbProfileHeader/SnbProfileHeader";
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
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export interface Props {}

export interface userInfoProps {
  username: string;
  bio: string;
  connections: number;
  viewed: number;
}

const SnbProfile = ({ ...rest }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Context />
    </QueryClientProvider>
  );
};
export default SnbProfile;

const getUserInfo = () => {
  return fetch("/data/profile").then((res) => res.json());
};

const Context = ({ ...rest }: Props) => {
  const { isLoading, error, data } = useQuery<userInfoProps>(
    "repoData",
    getUserInfo
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <SnbProfileStyled {...rest}>
      <SnbProfileHeader title={data?.username} desc={data?.bio} />

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
            {data?.connections}
          </Span>
        </ButtonContentFlexWrap>
      </SnbProfileButton>

      <SnbProfileButton>
        <ButtonContentFlexWrap>
          <P fontSize={12} color="grayPoint6" bold>
            Who's viewed your profile
          </P>

          <Span fontSize={12} color="primary" bold>
            {data?.viewed}
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

SnbProfile.defaultProps = {};
