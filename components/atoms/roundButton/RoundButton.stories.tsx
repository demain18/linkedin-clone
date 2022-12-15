import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RoundButton, { defaultProps } from "./RoundButton";

export default {
  title: "Atoms/RoundButton",
  component: RoundButton,
} as unknown as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => (
  <RoundButton {...args}></RoundButton>
);

export const Default = Template.bind({});
Default.args = {};
