import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbFundingHeader, { defaultProps } from "./SnbFundingHeader";

export default {
  title: "Molecules/SnbFunding/SnbFundingHeader",
  component: SnbFundingHeader,
} as unknown as ComponentMeta<typeof SnbFundingHeader>;

const Template: ComponentStory<typeof SnbFundingHeader> = (args) => (
  <SnbFundingHeader {...args}></SnbFundingHeader>
);

export const Default = Template.bind({});
Default.args = {
  companyName: defaultProps.companyName,
  totalRounds: defaultProps.totalRounds,
};
