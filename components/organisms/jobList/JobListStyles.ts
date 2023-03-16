import styled, { css } from "styled-components";
import { Props } from "./JobList";

interface ElementProps {
  themeIsLight: boolean;
}

export const JobListStyled = styled.div`
  position: relative;
  border-radius: 7px 0px 0px 0px;
  overflow-y: scroll;
  height: 100%;

  ${(props: ElementProps) =>
    !props.themeIsLight &&
    css`
      ::-webkit-scrollbar {
        background-color: #262626;
        opacity: 0.5;
      }

      /* ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.grayPoint1}!important;
      } */
    `}
`;
