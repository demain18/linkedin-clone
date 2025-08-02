import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TutorialBox, { defaultProps } from "./TutorialBox";

export default {
  title: "Molecules/TutorialBox",
  component: TutorialBox,
} as unknown as ComponentMeta<typeof TutorialBox>;

const Template: ComponentStory<typeof TutorialBox> = (args) => (
  <TutorialBox {...args}></TutorialBox>
);

export const Default = Template.bind({});
Default.args = {
  displayOrder: defaultProps.displayOrder,
  top: defaultProps.top,
  left: defaultProps.left,
  width: defaultProps.width,
  height: defaultProps.height,
  desc: defaultProps.desc,
};
