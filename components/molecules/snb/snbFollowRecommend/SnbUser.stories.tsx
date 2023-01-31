import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbUser, { defaultProps } from "./SnbUser";

export default {
  title: "Molecules/SnbRecommend/SnbUser",
  component: SnbUser,
} as unknown as ComponentMeta<typeof SnbUser>;

const Template: ComponentStory<typeof SnbUser> = (args) => (
  <SnbUser {...args}></SnbUser>
);
export const Default = Template.bind({});
Default.args = {
  avatarImg: defaultProps.avatarImg,
  name: defaultProps.name,
  info: defaultProps.info,
};
