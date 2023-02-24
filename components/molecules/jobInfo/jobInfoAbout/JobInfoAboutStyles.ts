import styled, { css } from "styled-components";
import { Props } from "./JobInfoAbout";
import Image from "next/image";
import { boxRadius } from "@/styles/moduleStyles";

export const JobInfoAboutStyled = styled.div`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.grayPoint1};
  ${boxRadius}
`;

export const CompanyWrap = styled.div`
  margin: 24px 0px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CompanyImgWrap = styled.div`
  position: relative;
  min-width: 72px;
  height: 72px;
`;

export const CompanyImgStyled = styled(Image)``;

export const CompanyInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const CompanyButtonContentWrap = styled.div`
  display: flex;
  align-items: center;
`;
