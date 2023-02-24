import styled, { css } from "styled-components";
import { Props } from "./GnbProfile";
import Image from "next/image";

export const ProfileImageWrap = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

export const ProfileImage = styled(Image)`
  border-radius: 100%;
`;

export const ContentWrap = styled.div`
  display: flex;
  margin-top: -5px;
`;

export const SpanWrap = styled.div`
  margin-top: 3px;
`;
