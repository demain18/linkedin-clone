import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TimelineProfile, { defaultProps } from "./TimelineProfile";

export default {
  title: "Molecules/Timeline/TimelineProfile",
  component: TimelineProfile,
} as unknown as ComponentMeta<typeof TimelineProfile>;

const Template: ComponentStory<typeof TimelineProfile> = (args) => (
  <TimelineProfile {...args}></TimelineProfile>
);

export const Default = Template.bind({});
Default.args = {};
