import React from "react";
import { Gnb, GnbWrap, LogoImageWrap, LogoImage } from "./GnbStyles";
import logoImg from "@/public/images/logo.png";

export interface Props {}

const GnbC = ({ ...rest }: Props) => {
  return (
    <Gnb>
      <GnbWrap>
        <LogoImageWrap>
          <LogoImage src={logoImg} layout="fill" objectFit="cover" />
        </LogoImageWrap>
        menu
      </GnbWrap>
    </Gnb>
  );
};
export default GnbC;

export const defaultProps: Props = {};
GnbC.defaultProps = {};
