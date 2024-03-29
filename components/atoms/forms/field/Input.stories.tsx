import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input, { defaultProps } from "./Input";

export default {
  title: "Atoms/Forms/Input",
  component: Input,
} as unknown as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { placeholder: defaultProps.placeholder };
