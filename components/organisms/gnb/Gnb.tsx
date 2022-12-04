import React from "react";
import { GnbC, GnbWrap, LogoImageWrap, LogoImage } from "./GnbStyles";
import logoImg from "@/public/images/logo.png";

export interface Props {}

const Gnb = ({ ...rest }: Props) => {
  return (
    <GnbC>
      <GnbWrap>
        <LogoImageWrap>
          <LogoImage src={logoImg} layout="fill" objectFit="cover" />
        </LogoImageWrap>
        menu
      </GnbWrap>
    </GnbC>
  );
};
export default Gnb;

export const defaultProps: Props = {};
Gnb.defaultProps = {};
