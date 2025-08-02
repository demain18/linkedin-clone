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
import { useDispatch, useSelector } from "react-redux";
import { closeTutorialBlock } from "modules/store/globalSlice";
import { RootState } from "modules/store";

export interface Props {
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  desc?: string;
}

const TutorialBox = ({ top, left, width, height, desc, ...rest }: Props) => {
  const dispatch = useDispatch();
  const contentsRead = () => dispatch(closeTutorialBlock());

  const contentsIsRead = useSelector(
    (state: RootState) => state.global.tutorialhasRead
  );

  return (
    <TutorialBoxWap top={top} left={left} {...rest}>
      {contentsIsRead || (
        <TutorialBoxStyled>
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
