import Span from "@/components/atoms/typography/span/Span";
import React from "react";
import {} from "./GnbMenuStyles";
import { AddCircle } from "@material-ui/icons";
import GnbButton from "@/components/molecules/gnb/gnbButton/GnbButton";

export interface Props {
  icon?: JSX.Element;
  content?: string;
  active?: boolean;
}

const GnbMenu = ({ icon, content, active, ...rest }: Props) => {
  return (
    <GnbButton active={active} {...rest}>
      {icon}
      <Span fontSize={12}>{content}</Span>
    </GnbButton>
  );
};
export default GnbMenu;

export const defaultProps: Props = {
  icon: <AddCircle />,
  content: "Test1",
  active: true,
};
GnbMenu.defaultProps = {
  content: defaultProps.content,
};
