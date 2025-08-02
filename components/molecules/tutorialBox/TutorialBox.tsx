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
import { tutorialOrderUpdate } from "modules/store/globalSlice";
import { RootState } from "modules/store";

export interface Props {
  displayOrder?: number;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  desc?: string;
}

const TutorialBox = ({
  displayOrder,
  top,
  left,
  width,
  height,
  desc,
  ...rest
}: Props) => {
  const dispatch = useDispatch();
  const orderUpdate = () => dispatch(tutorialOrderUpdate());

  const tutorialOrder: number = useSelector(
    (state: RootState) => state.global.tutorialOrder
  );

  // console.log(tutorialOrder, typeof tutorialOrder);

  return (
    <TutorialBoxWap top={top} left={left} {...rest}>
      {tutorialOrder === displayOrder ? (
        <TutorialBoxStyled>
          <TextBoxUIRange width={width} height={height}></TextBoxUIRange>
          <TextBoxWrap>
            <TextBoxDesc>
              <P>{desc}</P>
            </TextBoxDesc>
            <CloseWrap onClick={orderUpdate}>
              <P>
                <Close fontSize="small" />
              </P>
            </CloseWrap>
            <TextBoxDescArrow />
          </TextBoxWrap>
        </TutorialBoxStyled>
      ) : null}
    </TutorialBoxWap>
  );
};
export default TutorialBox;

export const defaultProps: Props = {
  displayOrder: 0,
  top: 0,
  left: 0,
  width: 200,
  height: 50,
  desc: "이곳에 위치한 버튼을 클릭해보세요.",
};

TutorialBox.defaultProps = {
  displayOrder: defaultProps.displayOrder,
  top: defaultProps.top,
  left: defaultProps.left,
  width: defaultProps.width,
  height: defaultProps.height,
  desc: defaultProps.desc,
};
