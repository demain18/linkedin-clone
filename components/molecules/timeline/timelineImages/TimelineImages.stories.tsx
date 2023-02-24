import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TimelineImages, { defaultProps } from "./TimelineImages";

export default {
  title: "Molecules/Timeline/TimelineImages",
  component: TimelineImages,
} as unknown as ComponentMeta<typeof TimelineImages>;

const Template: ComponentStory<typeof TimelineImages> = (args) => (
  <TimelineImages {...args}></TimelineImages>
);

export const Single = Template.bind({});
Single.args = { images: defaultProps.images?.slice(0, 1) };

export const Double = Template.bind({});
Double.args = { images: defaultProps.images?.slice(0, 2) };

export const Triple = Template.bind({});
Triple.args = { images: defaultProps.images?.slice(0, 3) };

export const Quadra = Template.bind({});
Quadra.args = { images: defaultProps.images?.slice(0, 4) };

export const Penta = Template.bind({});
Penta.args = { images: defaultProps.images?.slice(0, 5) };

export const OverPenta = Template.bind({});
OverPenta.args = {
  images: defaultProps.images,
  overPenta: true,
};
