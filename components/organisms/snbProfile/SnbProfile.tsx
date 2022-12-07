import SnbProfileButton from "@/components/molecules/snb/snbProfileButton/SnbProfileButton";
import SnbProfileHeader from "@/components/molecules/snb/snbProfileHeader/SnbProfileHeader";
import React from "react";
import { SnbProfileStyled } from "./SnbProfileStyles";

export interface Props {}

const SnbProfile = ({ ...rest }: Props) => {
  return (
    <SnbProfileStyled {...rest}>
      <SnbProfileHeader />
      <SnbProfileButton>test</SnbProfileButton>
    </SnbProfileStyled>
  );
};
export default SnbProfile;

export const defaultProps: Props = {};
SnbProfile.defaultProps = {};
