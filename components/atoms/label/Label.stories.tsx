import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Label, { defaultProps } from "./Label";

export default {
  title: "Atoms/Label",
  component: Label,
} as unknown as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}></Label>
);

export const Default = Template.bind({});
Default.args = {
  children: defaultProps.children,
};
