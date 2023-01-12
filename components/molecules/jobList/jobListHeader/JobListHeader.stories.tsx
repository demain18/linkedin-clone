import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobListHeader, { defaultProps } from "./JobListHeader";

export default {
  title: "Molecules/JobList/JobListHeader",
  component: JobListHeader,
} as unknown as ComponentMeta<typeof JobListHeader>;

const Template: ComponentStory<typeof JobListHeader> = (args) => (
  <JobListHeader {...args}></JobListHeader>
);

export const Default = Template.bind({});
Default.args = {};
