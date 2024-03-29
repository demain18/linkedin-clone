import styled, { css } from "styled-components";
import { Props } from "./SnbProfileHeader";
import Image from "next/image";
import { transitionHover } from "@/styles/transitionStyles";
import { layoutWidth, nonSelect } from "@/styles/moduleStyles";

export const SnbProfileHeaderStyled = styled.div`
  /* max-width: ${layoutWidth.snbProflie}px; */
  width: 100%;
  /* background-color: ${(props) => props.theme.white}; */
  padding-bottom: 16px;
  box-sizing: border-box;
`;

export const BannerImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.grayPoint2};
`;

export const BannerImage = styled(Image)`
  ${nonSelect}
`;

export const AvatarImageWrap = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  margin: 0 auto;
  margin-top: -35px;
  margin-bottom: 20px;
  border-radius: 100%;
  border: 3px solid ${(props) => props.theme.white};
  box-sizing: content-box;
`;

export const AvatarImage = styled(Image)`
  ${nonSelect}
  border-radius: 100%;
`;

export const PLinkWrak = styled.div`
  text-align: center;
  cursor: pointer;
  ${nonSelect}
  ${transitionHover}

  p:hover {
    text-decoration: underline;
  }
`;

export const PWrap = styled.div`
  text-align: center;
`;
