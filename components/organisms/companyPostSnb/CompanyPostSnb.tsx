import React from "react";
import { CompanyPostSnbStyled } from "./CompanyPostSnbStyles";

export interface Props {}

const CompanyPostSnb = ({ ...rest }: Props) => {
  return <CompanyPostSnbStyled {...rest}></CompanyPostSnbStyled>;
};
export default CompanyPostSnb;

export const defaultProps: Props = {};
CompanyPostSnb.defaultProps = {};
