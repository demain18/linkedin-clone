import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TimelineDescription, { defaultProps } from "./TimelineDescription";

export default {
  title: "Molecules/Timeline/TimelineDescription",
  component: TimelineDescription,
} as unknown as ComponentMeta<typeof TimelineDescription>;

const Template: ComponentStory<typeof TimelineDescription> = (args) => (
  <TimelineDescription {...args}></TimelineDescription>
);

export const Default = Template.bind({});
Default.args = {
  desc: defaultProps.desc,
};
