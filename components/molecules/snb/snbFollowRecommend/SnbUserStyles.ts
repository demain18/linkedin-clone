import { nonSelect } from "@/styles/moduleStyles";

import styled, { css } from "styled-components";
import { Props } from "./SnbUser";
import Image from "next/image";

export const SnbUserStyled = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  ${nonSelect}
`;

export const ContentWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const AvatarImageWrap = styled.div`
  position: relative;
  min-width: 48px;
  height: 48px;
`;

export const AvatarImage = styled(Image)`
  ${nonSelect}
  border-radius: 100%;
`;

export const Gap = styled.div`
  width: 100%;
  height: 3px;
`;

export const ButtonContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
