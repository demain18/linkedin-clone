import styled, { css } from "styled-components";
import { Props } from "./SnbProfileHeader";
import Image from "next/image";

export const SnbProfileHeaderStyled = styled.div`
  max-width: 225px;
  background-color: #fff;
  padding-bottom: 12px;
`;

export const BannerImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
`;

export const BannerImage = styled(Image)``;

export const AvatarImageWrap = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  margin: 0 auto;
  top: -30px;
  border-radius: 100%;
  border: 2px solid #fff;
`;

export const AvatarImage = styled(Image)`
  border-radius: 100%;
`;

export const PWrap = styled.div`
  text-align: center;
`;
