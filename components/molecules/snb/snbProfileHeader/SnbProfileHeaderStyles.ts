import styled, { css } from "styled-components";
import { Props } from "./SnbProfileHeader";
import Image from "next/image";
import { transitionHover } from "@/styles/transitionStyles";

export const SnbProfileHeaderStyled = styled.div`
  max-width: 225px;
  background-color: #fff;
  padding-bottom: 16px;
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
  margin-top: -35px;
  margin-bottom: 20px;
  border-radius: 100%;
  border: 3px solid #fff;
`;

export const AvatarImage = styled(Image)`
  border-radius: 100%;
`;

export const PLinkWrak = styled.div`
  text-align: center;
  cursor: pointer;
  ${transitionHover}

  p:hover {
    text-decoration: underline;
  }
`;

export const PWrap = styled.div`
  text-align: center;
`;
