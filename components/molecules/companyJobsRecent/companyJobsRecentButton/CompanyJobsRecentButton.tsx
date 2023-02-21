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
  disabled?: boolean;
}

const CompanyJobsRecentButton = ({ disabled, prev, next, ...rest }: Props) => {
  return (
    <CompanyJobsRecentButtonStyled {...rest}>
      {prev && (
        <ButtonWrap disabled={disabled}>
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
  disabled: false,
};
CompanyJobsRecentButton.defaultProps = {
  disabled: false,
};
