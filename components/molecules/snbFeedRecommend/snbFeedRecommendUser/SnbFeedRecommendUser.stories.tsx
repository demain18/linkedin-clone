import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbFeedRecommendUser, { defaultProps } from "./SnbFeedRecommendUser";

export default {
  title: "Molecules/SnbFeedRecommend/SnbFeedRecommendUser",
  component: SnbFeedRecommendUser,
} as unknown as ComponentMeta<typeof SnbFeedRecommendUser>;

const Template: ComponentStory<typeof SnbFeedRecommendUser> = (args) => (
  <SnbFeedRecommendUser {...args}></SnbFeedRecommendUser>
);
export const Default = Template.bind({});
Default.args = {
  avatarImg: defaultProps.avatarImg,
  name: defaultProps.name,
  info: defaultProps.info,
};
