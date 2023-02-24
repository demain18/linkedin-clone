import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbFundingFooter, { defaultProps } from "./SnbFundingFooter";

export default {
  title: "Molecules/SnbFunding/SnbFundingFooter",
  component: SnbFundingFooter,
} as unknown as ComponentMeta<typeof SnbFundingFooter>;

const Template: ComponentStory<typeof SnbFundingFooter> = (args) => (
  <SnbFundingFooter {...args}></SnbFundingFooter>
);

export const Default = Template.bind({});
Default.args = {};
