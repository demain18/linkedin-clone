import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WritePost, { defaultProps } from "./WritePost";

export default {
  title: "Organisms/WritePost",
  component: WritePost,
} as unknown as ComponentMeta<typeof WritePost>;

const Template: ComponentStory<typeof WritePost> = (args) => (
  <WritePost {...args}></WritePost>
);

export const Default = Template.bind({});
Default.args = {};
