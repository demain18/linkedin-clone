import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbPageRecommend, { defaultProps } from "./SnbPageRecommend";

export default {
  title: "Organisms/SnbPageRecommend",
  component: SnbPageRecommend,
} as unknown as ComponentMeta<typeof SnbPageRecommend>;

const Template: ComponentStory<typeof SnbPageRecommend> = (args) => (
  <SnbPageRecommend {...args}></SnbPageRecommend>
);

export const Default = Template.bind({});
Default.args = {};
