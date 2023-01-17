import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobList, { defaultProps } from "./JobList";

export default {
  title: "Organisms/JobList",
  component: JobList,
} as unknown as ComponentMeta<typeof JobList>;

const Template: ComponentStory<typeof JobList> = (args) => (
  <JobList {...args}></JobList>
);

export const Default = Template.bind({});
Default.args = {};
