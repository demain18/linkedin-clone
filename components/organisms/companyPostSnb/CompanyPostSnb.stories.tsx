import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyPostSnb, { defaultProps } from "./CompanyPostSnb";

export default {
  title: "Organisms/CompanyPostSnb",
  component: CompanyPostSnb,
} as unknown as ComponentMeta<typeof CompanyPostSnb>;

const Template: ComponentStory<typeof CompanyPostSnb> = (args) => (
  <CompanyPostSnb {...args}></CompanyPostSnb>
);

export const Default = Template.bind({});
Default.args = {
  companyName: defaultProps.companyName,
  followers: defaultProps.followers,
};
