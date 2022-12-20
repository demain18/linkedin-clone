import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Timeline, { defaultProps } from "./Timeline";

export default {
  title: "Organisms/Timeline",
  component: Timeline,
} as unknown as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args}></Timeline>
);

export const Default = Template.bind({});
Default.args = {};
