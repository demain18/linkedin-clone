import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GnbButton, { defaultProps } from "./GnbButton";

export default {
  title: "Molecules/Gnb/GnbButton",
  component: GnbButton,
} as unknown as ComponentMeta<typeof GnbButton>;

const Template: ComponentStory<typeof GnbButton> = (args) => (
  <GnbButton {...args}></GnbButton>
);

export const Default = Template.bind({});
Default.args = { children: defaultProps.children };

export const Active = Template.bind({});
Active.args = { active: defaultProps.active, children: defaultProps.children };
