import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import JobInfoDescription, { defaultProps } from "./JobInfoDescription";

export default {
  title: "Molecules/JobInfo/JobInfoDescription",
  component: JobInfoDescription,
} as unknown as ComponentMeta<typeof JobInfoDescription>;

const Template: ComponentStory<typeof JobInfoDescription> = (args) => (
  <JobInfoDescription {...args}></JobInfoDescription>
);

export const Default = Template.bind({});
Default.args = { desc: defaultProps.desc };
