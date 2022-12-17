import React from "react";
import { TimelineProfileStyled } from "./TimelineProfileStyles";

export interface Props {}

const TimelineProfile = ({ ...rest }: Props) => {
  return <TimelineProfileStyled {...rest}></TimelineProfileStyled>;
};
export default TimelineProfile;

export const defaultProps: Props = {};
TimelineProfile.defaultProps = {};
