import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbProfileButton, { defaultProps } from "./SnbProfileButton";

export default {
  title: "Molecules/Snb/SnbProfileButton",
  component: SnbProfileButton,
} as unknown as ComponentMeta<typeof SnbProfileButton>;

const Template: ComponentStory<typeof SnbProfileButton> = (args) => (
  <SnbProfileButton {...args}></SnbProfileButton>
);

export const Default = Template.bind({});
Default.args = {};
