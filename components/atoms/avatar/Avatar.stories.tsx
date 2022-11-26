import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar, { defaultProps } from "./Avatar";
import avatarPic from "../../../public/images/avatar.png";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: { controls: { sort: "requiredFirst" } },
} as unknown as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "small",
};

export const StaticImage = Template.bind({});
StaticImage.args = {
  size: defaultProps.size,
  image: avatarPic,
};

export const UrlImage = Template.bind({});
UrlImage.args = {
  size: "large",
  image: "https://i1.sndcdn.com/avatars-EavWtcIVfiIYyIML-q1Eppg-t500x500.jpg",
};
