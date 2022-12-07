import React from "react";
import { SnbProfileButtonStyled } from "./SnbProfileButtonStyles";

export interface Props {
  children?: any;
  jumbo?: boolean;
}

const SnbProfileButton = ({ children, jumbo, ...rest }: Props) => {
  return (
    <SnbProfileButtonStyled jumbo={jumbo} {...rest}>
      {children}
    </SnbProfileButtonStyled>
  );
};
export default SnbProfileButton;

export const defaultProps: Props = {
  children: "Test Content",
  jumbo: false,
};
SnbProfileButton.defaultProps = {
  children: defaultProps.children,
};
