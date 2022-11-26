import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Field from "./Field";

export default {
  title: "Atoms/Forms/Field",
  component: Field,
} as unknown as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Default = Template.bind({});
Default.args = {};
