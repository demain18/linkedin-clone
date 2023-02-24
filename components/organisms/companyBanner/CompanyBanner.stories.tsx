import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyBanner, { defaultProps } from "./CompanyBanner";

export default {
  title: "Organisms/CompanyBanner",
  component: CompanyBanner,
} as unknown as ComponentMeta<typeof CompanyBanner>;

const Template: ComponentStory<typeof CompanyBanner> = (args) => (
  <CompanyBanner {...args}></CompanyBanner>
);

export const Default = Template.bind({});
Default.args = {};
