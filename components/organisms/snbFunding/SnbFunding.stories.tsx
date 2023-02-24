import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbFunding, { defaultProps } from "./SnbFunding";

export default {
  title: "Organisms/SnbFunding",
  component: SnbFunding,
} as unknown as ComponentMeta<typeof SnbFunding>;

const Template: ComponentStory<typeof SnbFunding> = (args) => (
  <SnbFunding {...args}></SnbFunding>
);

export const Default = Template.bind({});
Default.args = {};
