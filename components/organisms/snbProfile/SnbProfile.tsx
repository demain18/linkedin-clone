import P from "@/components/atoms/typography/p/P";
import Span from "@/components/atoms/typography/span/Span";
import SnbProfileButton from "@/components/molecules/snb/snbProfileButton/SnbProfileButton";
import SnbProfileHeader from "@/components/molecules/snb/snbProfileHeader/SnbProfileHeader";
import React, { useEffect } from "react";
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

export interface Props {}

const SnbProfile = ({ ...rest }: Props) => {
  const getUserData = () => {
    fetch("/login", {
      method: "POST",
    }).then((res) => console.log(res.json()));
  };

  useEffect(() => {
    getUserData();
  });

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
            <P fontSize={12} color="black" bold>
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
