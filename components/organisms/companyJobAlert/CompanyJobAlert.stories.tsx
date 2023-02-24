import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyJobAlert, { defaultProps } from "./CompanyJobAlert";

export default {
  title: "Organisms/CompanyJobAlert",
  component: CompanyJobAlert,
} as unknown as ComponentMeta<typeof CompanyJobAlert>;

const Template: ComponentStory<typeof CompanyJobAlert> = (args) => (
  <CompanyJobAlert {...args}></CompanyJobAlert>
);

export const Default = Template.bind({});
Default.args = {};
