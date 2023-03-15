import Link from "next/link";
import React from "react";
import P from "../typography/p/P";
import { ContentWrap, RedirectStyled } from "./RedirectStyles";

export interface Props {
  href: string;
  content: string;
  bold?: boolean;
  outpage?: boolean;
}

const Redirect = ({ href, content, bold, outpage, ...rest }: Props) => {
  console.log(outpage);

  return (
    <RedirectStyled {...rest}>
      {!outpage ? (
        <Link href={href} passHref>
          <ContentWrap>
            <P color="grayPoint9" fontSize={14} bold={bold}>
              {content}
            </P>
          </ContentWrap>
        </Link>
      ) : (
        <a href={href} target="_blank">
          <ContentWrap>
            <P color="grayPoint9" fontSize={14} bold={bold}>
              {content}
            </P>
          </ContentWrap>
        </a>
      )}
    </RedirectStyled>
  );
};
export default Redirect;

export const defaultProps: Props = {
  href: "https://www.linkedin.com",
  content: "linkedin.com",
};
Redirect.defaultProps = {};
