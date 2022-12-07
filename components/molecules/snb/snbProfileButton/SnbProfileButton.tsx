import React from "react";
import { SnbProfileButtonStyled } from "./SnbProfileButtonStyles";

export interface Props {
  children?: any;
}

const SnbProfileButton = ({ children, ...rest }: Props) => {
  return <SnbProfileButtonStyled {...rest}>{children}</SnbProfileButtonStyled>;
};
export default SnbProfileButton;

export const defaultProps: Props = {
  children: "Test Content",
};
SnbProfileButton.defaultProps = {
  children: defaultProps.children,
};
