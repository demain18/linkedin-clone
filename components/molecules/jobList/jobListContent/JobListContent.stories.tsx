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
Default.args = {};
