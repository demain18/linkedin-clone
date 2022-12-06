import React from "react";
import { SnbProfileStyled } from "./SnbProfileStyles";

export interface Props {}

const SnbProfile = ({ ...rest }: Props) => {
  return <SnbProfileStyled {...rest}></SnbProfileStyled>;
};
export default SnbProfile;

export const defaultProps: Props = {};
SnbProfile.defaultProps = {};
