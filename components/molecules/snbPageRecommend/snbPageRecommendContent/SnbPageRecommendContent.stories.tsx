import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbPageRecommendContent, {
  defaultProps,
} from "./SnbPageRecommendContent";

export default {
  title: "Molecules/SnbPageRecommend/SnbPageRecommendContent",
  component: SnbPageRecommendContent,
} as unknown as ComponentMeta<typeof SnbPageRecommendContent>;

const Template: ComponentStory<typeof SnbPageRecommendContent> = (args) => (
  <SnbPageRecommendContent {...args}></SnbPageRecommendContent>
);

export const Default = Template.bind({});
Default.args = {
  pageImg: defaultProps.pageImg,
  pageName: defaultProps.pageName,
  pageCategory: defaultProps.pageCategory,
  pageFollowers: defaultProps.pageFollowers,
};
