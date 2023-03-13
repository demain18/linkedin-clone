import Label from "@/components/atoms/label/Label";
import P from "@/components/atoms/typography/p/P";
import { Launch } from "@material-ui/icons";
import { log } from "console";
import { getCompanyLocation } from "modules/api/apiRequest";
import { getCompanyLocationDto } from "modules/api/apiRequest.dto";
import { getCompanyName } from "modules/hooks/getCompanyName";

import React from "react";
import { useQuery } from "react-query";
import {
  CompanyLocationStyled,
  InfoWrap,
  LabelWrap,
  LinkStyled,
} from "./CompanyLocationStyles";

export interface Props {}

const CompanyLocation = ({ ...rest }: Props) => {
  const company = getCompanyName();

  const { data } = useQuery<string>(["companyLocation", company], () =>
    getCompanyLocation(company)
  );

  return (
    <CompanyLocationStyled {...rest}>
      <P fontSize={20} bold>
        Locations(1)
      </P>
      <InfoWrap>
        <LabelWrap>
          <Label>
            <P fontSize={13} color="grayPoint9" bold>
              Primary
            </P>
          </Label>
        </LabelWrap>
        <P fontSize={14} color="grayPoint6">
          {data}
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
