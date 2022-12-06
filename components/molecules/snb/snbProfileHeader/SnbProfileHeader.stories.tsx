import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbProfileHeader, { defaultProps } from "./SnbProfileHeader";

export default {
  title: "Molecules/Snb/SnbProfileHeader",
  component: SnbProfileHeader,
} as unknown as ComponentMeta<typeof SnbProfileHeader>;

const Template: ComponentStory<typeof SnbProfileHeader> = (args) => (
  <SnbProfileHeader {...args}></SnbProfileHeader>
);

export const Default = Template.bind({});
Default.args = {
  bannerImg: defaultProps.bannerImg,
  avatarImg: defaultProps.avatarImg,
};
