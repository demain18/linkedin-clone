import React from "react";
import styled from "styled-components";
import { IconStyled } from "./IconStyles";
import Home from "@material-ui/icons/Home";

interface Props {}

export default function Icon({ ...rest }: Props): JSX.Element {
  return (
    <IconStyled>
      <Home />
    </IconStyled>
  );
}

Icon.defaultProps = {};
