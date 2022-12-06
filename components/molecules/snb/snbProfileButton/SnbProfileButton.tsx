import React from "react";
import { SnbProfileButtonStyled } from "./SnbProfileButtonStyles";

export interface Props {}

const SnbProfileButton = ({ ...rest }: Props) => {
  return <SnbProfileButtonStyled {...rest}></SnbProfileButtonStyled>;
};
export default SnbProfileButton;

export const defaultProps: Props = {};
SnbProfileButton.defaultProps = {};
