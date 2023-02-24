import { boxRadius, nonSelect } from "@/styles/moduleStyles";
import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyJobsRecentButton";

export const CompanyJobsRecentButtonStyled = styled.div``;

export const ButtonWrap = styled.div<Props>`
  display: inline-block;
  padding: 2px 8px;
  cursor: pointer;
  ${transitionHover}
  border-radius: 0.3rem;
  color: ${(props) => props.theme.grayPoint6};
  ${nonSelect}

  :hover {
    background-color: ${(props) => props.theme.grayPoint1};
  }

  ${(props) =>
    props.disabled &&
    css`
      p {
        color: ${(props) => props.theme.grayPoint4};
      }
      svg {
        color: ${(props) => props.theme.grayPoint4};
      }

      :hover {
        background-color: rgba(0, 0, 0, 0);
        cursor: not-allowed !important;
      }
    `}
`;

export const ButtonContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const ArrowFlip = styled.div`
  transform: rotate(0.5turn);
  position: relative;
  top: -1px;
  right: -1px;
`;
