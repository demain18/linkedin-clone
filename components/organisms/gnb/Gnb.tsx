import React from "react";
import { GnbStyled, GnbWrap, LogoImageWrap, LogoImage } from "./GnbStyles";
import logoImg from "@/public/images/logo.png";

export interface Props {}

const Gnb = ({ ...rest }: Props) => {
  return (
    <GnbStyled>
      <GnbWrap>
        <LogoImageWrap>
          <LogoImage src={logoImg} layout="fill" objectFit="cover" />
        </LogoImageWrap>
        menu
      </GnbWrap>
    </GnbStyled>
  );
};
export default Gnb;

export const defaultProps: Props = {};
Gnb.defaultProps = {};
