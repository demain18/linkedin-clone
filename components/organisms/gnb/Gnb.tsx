import React from "react";
import {
  GnbStyled,
  GnbWrap,
  FlexWrap,
  LogoImageWrap,
  LogoImage,
  InputWrap,
  GnbMenusWrap,
} from "./GnbStyles";
import logoImg from "@/public/images/logo.png";
import Input from "@/components/atoms/forms/field/Input";
import GnbMenus from "@/components/molecules/gnbMenus/GnbMenus";

export interface Props {}

const Gnb = ({ ...rest }: Props) => {
  return (
    <GnbStyled>
      <GnbWrap>
        <FlexWrap>
          <LogoImageWrap>
            <LogoImage src={logoImg} layout="fill" objectFit="cover" />
          </LogoImageWrap>

          <InputWrap>
            <Input />
          </InputWrap>
        </FlexWrap>

        <GnbMenus />
      </GnbWrap>
    </GnbStyled>
  );
};
export default Gnb;

export const defaultProps: Props = {};
Gnb.defaultProps = {};
