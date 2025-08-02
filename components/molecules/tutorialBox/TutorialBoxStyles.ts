import styled, { css } from "styled-components";
import { Props } from "./TutorialBox";
import { transitionHover } from "@/styles/transitionStyles";

export const TutorialBoxWap = styled.div<Props>``;

export const TutorialBoxStyled = styled.div<Props>`
  position: absolute;
  top: ${(props) => props.top + "px"};
  left: ${(props) => props.left + "px"};
  // useeffect에서 prop 제대로 들어오는데 왜 여기선 undefined로 뜨지
`;

export const TextBoxUIRange = styled.div<Props>`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  background-color: #80ff0027;
  border: 1px solid #80ff009c;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const TextBoxWrap = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #80ff0042;
  padding: 8px 10px;
  border-radius: 5px;
  max-width: fit-content;
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
