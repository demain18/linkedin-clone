import styled, { css } from "styled-components";
import { Props } from "./JobInfoTags";

export const JobInfoTagsStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TagStyled = styled.div`
  display: flex;
  gap: 5px;
`;

export const TagIconStyled = styled.div`
  color: ${(props) => props.theme.grayPoint6};
  margin-right: 3px;
`;
