import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Redirect, { defaultProps } from "./Redirect";

export default {
  title: "Atoms/Redirect",
  component: Redirect,
} as unknown as ComponentMeta<typeof Redirect>;

const Template: ComponentStory<typeof Redirect> = (args) => (
  <Redirect {...args}></Redirect>
);

export const Default = Template.bind({});
Default.args = {
  href: defaultProps.href,
  children: defaultProps.children,
};

export const Bold = Template.bind({});
Bold.args = {
  href: defaultProps.href,
  children: defaultProps.children,
};

export const OutPage = Template.bind({});
OutPage.args = {
  href: defaultProps.href,
  children: defaultProps.children,
  outpage: true,
};
