import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GnbC, { defaultProps } from "./Gnb";

export default {
  title: "Molecules/Gnb",
  component: GnbC,
} as unknown as ComponentMeta<typeof GnbC>;

const Template: ComponentStory<typeof GnbC> = (args) => <GnbC {...args}></GnbC>;

export const Default = Template.bind({});
Default.args = {};
