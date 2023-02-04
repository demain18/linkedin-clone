import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbFeedRecommend, { defaultProps } from "./SnbFeedRecommend";

export default {
  title: "Organisms/SnbFeedRecommend",
  component: SnbFeedRecommend,
} as unknown as ComponentMeta<typeof SnbFeedRecommend>;

const Template: ComponentStory<typeof SnbFeedRecommend> = (args) => (
  <SnbFeedRecommend {...args}></SnbFeedRecommend>
);

export const Default = Template.bind({});
Default.args = {};
