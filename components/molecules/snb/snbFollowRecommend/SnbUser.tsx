import React from "react";
import { SnbUserStyled } from "./SnbUserStyles";

export interface Props {}

const SnbUser = ({ ...rest }: Props) => {
  return <SnbUserStyled {...rest}>SnbUser</SnbUserStyled>;
}
export default SnbUser;

export const defaultProps: Props = {};
SnbUser.defaultProps = {};
