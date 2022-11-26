import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardHeader from "./CardHeader";

export default {
  title: "Molecules/CardHeader",
  component: CardHeader,
  parameters: { controls: { sort: "requiredFirst" } },
} as unknown as ComponentMeta<typeof CardHeader>;

const Template: ComponentStory<typeof CardHeader> = (args) => (
  <CardHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {};
