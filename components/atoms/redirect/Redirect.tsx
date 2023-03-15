import Link from "next/link";
import React from "react";
import P from "../typography/p/P";
import { ContentWrap, RedirectStyled } from "./RedirectStyles";

export interface Props {
  href: string;
  content?: string;
  bold?: boolean;
  outpage?: boolean;
  fontSize?: number;
}

const Redirect = ({
  href,
  content,
  bold,
  outpage,
  fontSize,
  ...rest
}: Props) => {
  return (
    <RedirectStyled {...rest}>
      {!outpage ? (
        <Link href={href} passHref>
          <ContentWrap>
            <P color="grayPoint9" fontSize={fontSize} bold={bold}>
              {content}
            </P>
          </ContentWrap>
        </Link>
      ) : (
        <a href={href} target="_blank">
          <ContentWrap>
            <P color="grayPoint9" fontSize={fontSize} bold={bold}>
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
  fontSize: 14,
};
Redirect.defaultProps = {
  fontSize: defaultProps.fontSize,
};
