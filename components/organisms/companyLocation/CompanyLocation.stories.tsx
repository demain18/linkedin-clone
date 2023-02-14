import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyLocation, { defaultProps } from "./CompanyLocation";

export default {
  title: "Organisms/CompanyLocation",
  component: CompanyLocation,
} as unknown as ComponentMeta<typeof CompanyLocation>;

const Template: ComponentStory<typeof CompanyLocation> = (args) => (
  <CompanyLocation {...args}></CompanyLocation>
);

export const Default = Template.bind({});
Default.args = {};
