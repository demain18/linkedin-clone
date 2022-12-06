import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbProfile, { defaultProps } from "./SnbProfile";

export default {
  title: "Organisms/SnbProfile",
  component: SnbProfile,
} as unknown as ComponentMeta<typeof SnbProfile>;

const Template: ComponentStory<typeof SnbProfile> = (args) => (
  <SnbProfile {...args}></SnbProfile>
);

export const Default = Template.bind({});
Default.args = {};
