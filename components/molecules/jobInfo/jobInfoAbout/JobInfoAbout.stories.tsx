import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobInfoAbout, { defaultProps } from "./JobInfoAbout";

export default {
  title: "Molecules/JobInfo/JobInfoAbout",
  component: JobInfoAbout,
} as unknown as ComponentMeta<typeof JobInfoAbout>;

const Template: ComponentStory<typeof JobInfoAbout> = (args) => (
  <JobInfoAbout {...args}></JobInfoAbout>
);

export const Default = Template.bind({});
Default.args = {
  companyLogoImg: defaultProps.companyLogoImg,
  companyName: defaultProps.companyName,
  companyDesc: defaultProps.companyDesc,
  followers: defaultProps.followers,
};
