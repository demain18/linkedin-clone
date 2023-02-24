import styled, { css } from "styled-components";
import { Props } from "./WritePost";
import Image from "next/image";
import { boxRadius, nonSelect } from "@/styles/moduleStyles";

export const WritePostStyled = styled.div<Props>`
  /* max-width: 540px; */
  width: 100%;
  padding: 12px 16px 4px 16px;
  ${boxRadius}
  background-color: ${(props) => props.theme.white};
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.grayPoint1};
`;

export const WriteWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const AvatarImageWrap = styled.div`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const AvatarImage = styled(Image)`
  ${nonSelect}
  border-radius: 100%;
`;
export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
`;

export const Button = styled.div`
  padding: 12px 8px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  ${nonSelect}
`;
