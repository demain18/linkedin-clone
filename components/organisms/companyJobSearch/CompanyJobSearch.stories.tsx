import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyJobSearch, { defaultProps } from "./CompanyJobSearch";

export default {
  title: "Organisms/CompanyJobSearch",
  component: CompanyJobSearch,
} as unknown as ComponentMeta<typeof CompanyJobSearch>;

const Template: ComponentStory<typeof CompanyJobSearch> = (args) => (
  <CompanyJobSearch {...args}></CompanyJobSearch>
);

export const Default = Template.bind({});
Default.args = {};
