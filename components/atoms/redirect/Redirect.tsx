import Link from "next/link";
import React from "react";
import P from "../typography/p/P";
import { HoverStyled, RedirectStyled } from "./RedirectStyles";

export interface Props {
  href: string;
  children?: JSX.Element | JSX.Element[] | string;
  outpage?: boolean;
}

const Redirect = ({ href, children, outpage, ...rest }: Props) => {
  return (
    <RedirectStyled {...rest}>
      {!outpage ? (
        <Link href={href} passHref>
          <HoverStyled>{children}</HoverStyled>
        </Link>
      ) : (
        <a href={href} target="_blank">
          <HoverStyled>{children}</HoverStyled>
        </a>
      )}
    </RedirectStyled>
  );
};
export default Redirect;

export const defaultProps: Props = {
  href: "https://www.linkedin.com",
  children: (
    <P color="grayPoint9" fontSize={14}>
      Linked in
    </P>
  ),
};
Redirect.defaultProps = {};
