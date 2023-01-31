import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbFundingContent, { defaultProps } from "./SnbFundingContent";

export default {
  title: "Molecules/SnbFunding/SnbFundingContent",
  component: SnbFundingContent,
} as unknown as ComponentMeta<typeof SnbFundingContent>;

const Template: ComponentStory<typeof SnbFundingContent> = (args) => (
  <SnbFundingContent {...args}></SnbFundingContent>
);

export const Default = Template.bind({});
Default.args = {};
