import styled, { css } from "styled-components";
import { Props } from "../../pages/jobs/index";

export const GlobalWrap = styled.div`
  width: 100%;
  height: calc(100vh - 78px);
  /* border: 1px solid blue; */
  display: flex;
  overflow: hidden;
`;

export const JobListWrap = styled.div`
  min-width: 450px;
  height: 100%;
  background-color: ${(props) => props.theme.white};
  /* overflow-y: scroll; */
`;

export const JobInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  /* padding: 20px;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  gap: 20px; */
`;
