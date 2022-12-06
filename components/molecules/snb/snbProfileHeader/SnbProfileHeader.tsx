import React from "react";
import { SnbProfileHeaderStyled } from "./SnbProfileHeaderStyles";

export interface Props {}

const SnbProfileHeader = ({ ...rest }: Props) => {
  return <SnbProfileHeaderStyled {...rest}></SnbProfileHeaderStyled>;
};
export default SnbProfileHeader;

export const defaultProps: Props = {};
SnbProfileHeader.defaultProps = {};
