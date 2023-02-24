import styled, { css } from "styled-components";
import { Props } from "./JobListContent";
import Image from "next/image";
import { nonSelect } from "@/styles/moduleStyles";

export const JobListContentStyled = styled.div<Props>`
  padding: 8px;
  background-color: ${(props) => props.theme.white};
  display: flex;
  gap: 10px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.primaryLight};
    `}
`;

export const HeaderWrap = styled.div``;

export const LogoImgWrap = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
`;

export const LogoImage = styled(Image)`
  ${nonSelect}
`;

export const ContentWrap = styled.div`
  box-sizing: border-box;

  p:nth-child(1) {
    :hover {
      text-decoration: underline;
    }
  }

  p:nth-child(2) {
    :hover {
      color: ${(props) => props.theme.primary};
      text-decoration: underline;
    }
  }
`;

export const ActivelyWrap = styled.div`
  margin-top: 5px;
  display: flex;

  color: ${(props) => props.theme.green};
`;

export const InfoWrap = styled.div`
  margin-top: 6px;
  display: flex;
  gap: 3px;
`;
