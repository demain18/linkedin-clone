import { nonSelect } from "@/styles/moduleStyles";
import styled, { css } from "styled-components";
import { Props } from "./TimelineEvents";

export const TimelineEventsStyled = styled.div<Props>``;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonContent = styled.div`
  width: 100%;
  padding: 10px 30px;
  display: flex;
  gap: 5px;
  box-sizing: border-box;
  justify-content: center;
  ${nonSelect}

  svg {
    color: ${(props) => props.theme.grayPoint6};
  }
`;
