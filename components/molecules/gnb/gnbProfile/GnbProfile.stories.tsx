import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GnbProfile, { defaultProps } from "./GnbProfile";

export default {
  title: "Molecules/Gnb/GnbProfile",
  component: GnbProfile,
} as unknown as ComponentMeta<typeof GnbProfile>;

const Template: ComponentStory<typeof GnbProfile> = (args) => (
  <GnbProfile {...args}></GnbProfile>
);

export const Default = Template.bind({});
Default.args = {};
