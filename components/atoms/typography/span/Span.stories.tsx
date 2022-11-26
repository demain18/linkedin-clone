import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Span, { defaultProps } from "./Span";

export default {
  title: "Atoms/Typography/Span",
  component: Span,
} as unknown as ComponentMeta<typeof Span>;

const Template: ComponentStory<typeof Span> = (args) => <Span {...args}></Span>;

export const Default = Template.bind({});
Default.args = {
  children: defaultProps.children,
};

export const Bold = Template.bind({});
Bold.args = {
  children: defaultProps.children,
  bold: true,
};

export const Color = Template.bind({});
Color.args = {
  children: defaultProps.children,
  color: "primary",
};
