import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyOverview, { defaultProps } from "./CompanyOverview";

export default {
  title: "Organisms/CompanyOverview",
  component: CompanyOverview,
} as unknown as ComponentMeta<typeof CompanyOverview>;

const Template: ComponentStory<typeof CompanyOverview> = (args) => (
  <CompanyOverview {...args}></CompanyOverview>
);

export const Default = Template.bind({});
Default.args = {};
