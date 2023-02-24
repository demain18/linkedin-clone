import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbPageRecommendFooter, { defaultProps } from "./SnbPageRecommendFooter";

export default {
  title: "Molecules/SnbPageRecommend/SnbPageRecommendFooter",
  component: SnbPageRecommendFooter,
} as unknown as ComponentMeta<typeof SnbPageRecommendFooter>;

const Template: ComponentStory<typeof SnbPageRecommendFooter> = (args) => (
  <SnbPageRecommendFooter {...args}></SnbPageRecommendFooter>
);

export const Default = Template.bind({});
Default.args = {};
