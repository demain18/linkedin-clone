import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GnbMenu, { defaultProps } from "./GnbMenu";

export default {
  title: "Molecules/GnbMenu",
  component: GnbMenu,
} as unknown as ComponentMeta<typeof GnbMenu>;

const Template: ComponentStory<typeof GnbMenu> = (args) => (
  <GnbMenu {...args}></GnbMenu>
);

export const Default = Template.bind({});
Default.args = {
  icon: defaultProps.icon,
  content: defaultProps.content,
};

export const Active = Template.bind({});
Active.args = {
  icon: defaultProps.icon,
  content: defaultProps.content,
  active: defaultProps.active,
};
