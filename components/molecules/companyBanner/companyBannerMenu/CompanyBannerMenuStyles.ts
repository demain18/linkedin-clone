import { transitionHover } from "@/styles/transitionStyles";
import styled, { css } from "styled-components";
import { Props } from "./CompanyBannerMenu";

export const CompanyBannerMenuStyled = styled.div<Props>`
  display: inline-block;
  padding: 12px 16px;
  cursor: pointer;
  box-sizing: border-box;

  p {
    color: ${(props) => props.theme.grayPoint6};
    font-weight: 500;
  }

  :hover {
    p {
      color: ${(props) => props.theme.grayPoint8};
    }
  }

  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid ${(props) => props.theme.green};

      p {
        color: ${(props) => props.theme.green};
      }

      :hover {
        p {
          color: ${(props) => props.theme.green};
        }
      }
    `}
`;
