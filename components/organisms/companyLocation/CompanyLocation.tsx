import Label from "@/components/atoms/label/Label";
import P from "@/components/atoms/typography/p/P";
import { Launch } from "@material-ui/icons";
import { log } from "console";
import { getCompanyLocation } from "modules/api/apiRequest";
import { getCompanyLocationDto } from "modules/api/apiRequest.dto";

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
  const { isLoading, error, data } = useQuery<getCompanyLocationDto[]>(
    "companyLocation",
    getCompanyLocation
  );

  return (
    <CompanyLocationStyled {...rest}>
      <P fontSize={20} bold>
        {`Locations (${data?.length})`}
      </P>
      {data?.map((i, x) => {
        return (
          <InfoWrap key={x + "key"}>
            <LabelWrap>
              <Label>
                <P fontSize={13} color="grayPoint9" bold>
                  Primary
                </P>
              </Label>
            </LabelWrap>
            <P fontSize={14} color="grayPoint6">
              {i.location}
            </P>
            <LinkStyled>
              Get directions
              <Launch style={{ fontSize: 14 }} />
            </LinkStyled>
          </InfoWrap>
        );
      })}
    </CompanyLocationStyled>
  );
};
export default CompanyLocation;

export const defaultProps: Props = {};
CompanyLocation.defaultProps = {};
