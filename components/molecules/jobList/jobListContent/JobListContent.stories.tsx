import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobListContent, { defaultProps } from "./JobListContent";

export default {
  title: "Molecules/JobList/JobListContent",
  component: JobListContent,
} as unknown as ComponentMeta<typeof JobListContent>;

const Template: ComponentStory<typeof JobListContent> = (args) => (
  <JobListContent {...args}></JobListContent>
);

export const Default = Template.bind({});
Default.args = {
  active: defaultProps.active,
  employerLogo: defaultProps.employerLogo,
  employerCompany: defaultProps.employerCompany,
  title: defaultProps.title,
  country: defaultProps.country,
  jobForm: defaultProps.jobForm,
  actively: defaultProps.actively,
  datetime: defaultProps.datetime,
  applicants: defaultProps.applicants,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  employerLogo: defaultProps.employerLogo,
  employerCompany: defaultProps.employerCompany,
  title: defaultProps.title,
  country: defaultProps.country,
  jobForm: defaultProps.jobForm,
  actively: defaultProps.actively,
  datetime: defaultProps.datetime,
  applicants: defaultProps.applicants,
};
