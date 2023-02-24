import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import P, { defaultProps } from "./P";

export default {
  title: "Atoms/Typography/P",
  component: P,
} as unknown as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: defaultProps.children,
  fontSize: defaultProps.fontSize,
};
