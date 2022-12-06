import React from "react";
import { GnbButtonStyled } from "./GnbButtonStyles";

export interface Props {
  active?: boolean;
  children: any;
}

const GnbButton = ({ active, children, ...rest }: Props) => {
  return (
    <GnbButtonStyled active={active} {...rest}>
      {children}
    </GnbButtonStyled>
  );
};
export default GnbButton;

export const defaultProps: Props = {
  active: true,
  children: <p>Test</p>,
};
GnbButton.defaultProps = {};
