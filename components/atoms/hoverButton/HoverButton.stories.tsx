import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HoverButton, { defaultProps } from "./HoverButton";

export default {
  title: "Atoms/HoverButton",
  component: HoverButton,
} as unknown as ComponentMeta<typeof HoverButton>;

const Template: ComponentStory<typeof HoverButton> = (args) => (
  <HoverButton {...args}></HoverButton>
);

export const Default = Template.bind({});
Default.args = { children: defaultProps.children };
