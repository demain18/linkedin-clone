import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobInfoHeader, { defaultProps } from "./JobInfoHeader";

export default {
  title: "Molecules/JobInfo/JobInfoHeader",
  component: JobInfoHeader,
} as unknown as ComponentMeta<typeof JobInfoHeader>;

const Template: ComponentStory<typeof JobInfoHeader> = (args) => (
  <JobInfoHeader {...args}></JobInfoHeader>
);

export const Default = Template.bind({});
Default.args = {
  title: defaultProps.title,
  employerCompany: defaultProps.employerCompany,
  country: defaultProps.country,
  jobForm: defaultProps.jobForm,
  datetime: defaultProps.datetime,
  applicants: defaultProps.applicants,
};
