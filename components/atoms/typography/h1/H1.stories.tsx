import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import H1, { defaultProps } from "./H1";

export default {
  title: "Atoms/Typography/H1",
  component: H1,
} as unknown as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontSize: defaultProps.fontSize,
  children: defaultProps.children,
};
