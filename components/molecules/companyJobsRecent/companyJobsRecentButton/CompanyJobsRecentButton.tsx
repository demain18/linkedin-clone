import P from "@/components/atoms/typography/p/P";
import React from "react";
import {
  ArrowFlip,
  ButtonContentWrap,
  ButtonWrap,
  CompanyJobsRecentButtonStyled,
} from "./CompanyJobsRecentButtonStyles";
import { ArrowForwardIos } from "@material-ui/icons";

export interface Props {
  prev?: boolean;
  next?: boolean;
}

const CompanyJobsRecentButton = ({ prev, next, ...rest }: Props) => {
  return (
    <CompanyJobsRecentButtonStyled {...rest}>
      {prev && (
        <ButtonWrap>
          <ButtonContentWrap>
            <ArrowFlip>
              <ArrowForwardIos style={{ fontSize: 16 }} />
            </ArrowFlip>
            <P fontSize={14} color="grayPoint6" bold>
              Prev
            </P>
          </ButtonContentWrap>
        </ButtonWrap>
      )}
      {next && (
        <ButtonWrap>
          <ButtonContentWrap>
            <P fontSize={14} color="grayPoint6" bold>
              Next
            </P>
            <ArrowForwardIos style={{ fontSize: 16 }} />
          </ButtonContentWrap>
        </ButtonWrap>
      )}
    </CompanyJobsRecentButtonStyled>
  );
};
export default CompanyJobsRecentButton;

export const defaultProps: Props = {
  prev: true,
  next: true,
};
CompanyJobsRecentButton.defaultProps = {};
