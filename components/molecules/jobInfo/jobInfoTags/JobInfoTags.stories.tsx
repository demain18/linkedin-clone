import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobInfoTags, { defaultProps } from "./JobInfoTags";

export default {
  title: "Molecules/JobInfo/JobInfoTags",
  component: JobInfoTags,
} as unknown as ComponentMeta<typeof JobInfoTags>;

const Template: ComponentStory<typeof JobInfoTags> = (args) => (
  <JobInfoTags {...args}></JobInfoTags>
);

export const Default = Template.bind({});
Default.args = {
  jobForm: defaultProps.jobForm,
  employerCompany: {
    employeeCounts: defaultProps.employerCompany?.employeeCounts,
    companyKinds: defaultProps.employerCompany?.companyKinds,
  },
  connects: {
    connection: defaultProps.connects?.connection,
    alumni: defaultProps.connects?.alumni,
  },
  applicants: defaultProps.applicants,
  skills: defaultProps.skills,
};
