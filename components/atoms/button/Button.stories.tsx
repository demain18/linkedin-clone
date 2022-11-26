import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { defaultProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as unknown as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: defaultProps.children,
};
