import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyJobRecent, { defaultProps } from "./CompanyJobRecent";

export default {
  title: "Organisms/CompanyJobRecent",
  component: CompanyJobRecent,
} as unknown as ComponentMeta<typeof CompanyJobRecent>;

const Template: ComponentStory<typeof CompanyJobRecent> = (args) => (
  <CompanyJobRecent {...args}></CompanyJobRecent>
);

export const Default = Template.bind({});
Default.args = {};
