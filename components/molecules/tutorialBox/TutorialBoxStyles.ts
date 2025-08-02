import styled, { css, keyframes } from "styled-components";
import { Props } from "./TutorialBox";
import { transitionHover } from "@/styles/transitionStyles";

interface ElementProps {
  themeIsLight: boolean;
}

export const TutorialBoxWap = styled.div<Props>`
  /* float: left; */
  position: absolute;
  top: ${(props) => props.top + "px"};
  left: ${(props) => props.left + "px"};
  z-index: 3;
`;

export const TutorialBoxStyled = styled.div<Props>``;

const animationBlink = keyframes`
  0% {
    background-color: #80ff0042;
  }
  50% {
    background-color: rgba(118, 218, 19, 0.49);
  }
  100% {
    background-color: #80ff0042;
  }
`;

const animationBorderBlink = keyframes`
  0% {
    border-bottom: 8px solid #80ff0042;
  }
  50% {
    border-bottom: 8px solid rgba(118, 218, 19, 0.49);
  }
  100% {
    border-bottom: 8px solid #80ff0042;
  }
`;

export const TextBoxUIRange = styled.div<Props>`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  background-color: #80ff0027;
  border: 1px solid #80ff009c;
  border-radius: 5px;
  margin-bottom: 15px;
  animation: ${animationBlink} 2s ease-in-out 1s infinite;
`;

export const TextBoxWrap = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #80ff0042;
  backdrop-filter: blur(2px);
  padding: 8px 10px;
  border-radius: 5px;
  max-width: fit-content;
  animation: ${animationBlink} 2s ease-in-out 1s infinite;
`;

export const TextBoxDesc = styled.div<Props>``;

export const TextBoxDescArrow = styled.div<Props>`
  position: absolute;
  top: -8px;
  left: 16px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #80ff0042;

  animation: ${animationBorderBlink} 2s ease-in-out 1s infinite;
`;

export const CloseWrap = styled.div<Props>`
  cursor: pointer;
  height: 20px;
  margin-left: 3px;
  color: #202020ab;

  :hover {
    ${transitionHover}
    background-color: #4158291a;
    border-radius: 3px;
  }
`;
