import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobInfo, { defaultProps } from "./JobInfo";

export default {
  title: "Organisms/JobInfo",
  component: JobInfo,
} as unknown as ComponentMeta<typeof JobInfo>;

const Template: ComponentStory<typeof JobInfo> = (args) => (
  <JobInfo {...args}></JobInfo>
);

export const Default = Template.bind({});
Default.args = {};
