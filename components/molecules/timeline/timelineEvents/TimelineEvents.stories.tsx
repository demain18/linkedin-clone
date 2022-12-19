import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TimelineEvents, { defaultProps } from "./TimelineEvents";

export default {
  title: "Molecules/Timeline/TimelineEvents",
  component: TimelineEvents,
} as unknown as ComponentMeta<typeof TimelineEvents>;

const Template: ComponentStory<typeof TimelineEvents> = (args) => (
  <TimelineEvents {...args}></TimelineEvents>
);

export const Default = Template.bind({});
Default.args = {};
