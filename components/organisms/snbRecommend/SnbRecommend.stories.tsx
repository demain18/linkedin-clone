import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SnbRecommend, { defaultProps } from "./SnbRecommend";

export default {
  title: "Organisms/SnbRecommend",
  component: SnbRecommend,
} as unknown as ComponentMeta<typeof SnbRecommend>;

const Template: ComponentStory<typeof SnbRecommend> = (args) => (
  <SnbRecommend {...args}></SnbRecommend>
);

export const Default = Template.bind({});
Default.args = {};
