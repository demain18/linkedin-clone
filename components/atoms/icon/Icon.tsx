import React from "react";
import { IconStyled } from "./IconStyles";
import Home from "@material-ui/icons/Home";

export interface Props {}

const Icon = ({ ...rest }: Props) => {
  return (
    <IconStyled {...rest}>
      <Home />
    </IconStyled>
  );
};
export default Icon;

export const defaultProps: Props = {};
Icon.defaultProps = {};
