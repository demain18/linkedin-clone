import Label from "@/components/atoms/label/Label";
import P from "@/components/atoms/typography/p/P";
import { Launch } from "@material-ui/icons";

import React from "react";
import {
  CompanyLocationStyled,
  InfoWrap,
  LinkStyled,
} from "./CompanyLocationStyles";

export interface Props {}

const CompanyLocation = ({ ...rest }: Props) => {
  return (
    <CompanyLocationStyled {...rest}>
      <P fontSize={20} bold>
        Locations (1)
      </P>
      <InfoWrap>
        <Label>Primary</Label>
        <P fontSize={14} color="grayPoint6">
          Arc Place 10~13F, Teheran-ro 142, Gangnam-Gu, Seoul , Seoul , Seoul
          Korea, KR
        </P>
        <LinkStyled>
          Get directions
          <Launch style={{ fontSize: 14 }} />
        </LinkStyled>
      </InfoWrap>
    </CompanyLocationStyled>
  );
};
export default CompanyLocation;

export const defaultProps: Props = {};
CompanyLocation.defaultProps = {};
