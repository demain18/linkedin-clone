import React, { useEffect, useState } from "react";
import {
  CloseWrap,
  TextBoxDesc,
  TextBoxDescArrow,
  TextBoxUIRange,
  TextBoxWrap,
  TutorialBoxStyled,
  TutorialBoxWap,
} from "./TutorialBoxStyles";
import P from "@/components/atoms/typography/p/P";
import { Close, Height, Widgets } from "@material-ui/icons";

export interface Props {
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  desc?: string;
}

const TutorialBox = ({ top, left, width, height, desc, ...rest }: Props) => {
  const [contentsIsRead, setContentsIsRead] = useState<boolean>(false);
  const contentsRead = () => setContentsIsRead(true);

  useEffect(() => {
    console.log(top, left, width, height, desc);
  });

  return (
    <TutorialBoxWap {...rest}>
      {contentsIsRead || (
        <TutorialBoxStyled top={top} left={left}>
          <TextBoxUIRange width={width} height={height}></TextBoxUIRange>
          <TextBoxWrap>
            <TextBoxDesc>
              <P>{desc}</P>
            </TextBoxDesc>
            <CloseWrap onClick={contentsRead}>
              <Close fontSize="small" />
            </CloseWrap>
            <TextBoxDescArrow />
          </TextBoxWrap>
        </TutorialBoxStyled>
      )}
    </TutorialBoxWap>
  );
};
export default TutorialBox;

export const defaultProps: Props = {
  top: 0,
  left: 0,
  width: 200,
  height: 50,
  desc: "이곳에 위치한 버튼을 클릭해보세요.",
};

TutorialBox.defaultProps = {
  top: defaultProps.top,
  left: defaultProps.left,
  width: defaultProps.width,
  height: defaultProps.height,
  desc: defaultProps.desc,
};
