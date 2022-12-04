import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Gnb, { defaultProps } from "./Gnb";

export default {
  title: "Organisms/Gnb",
  component: Gnb,
} as unknown as ComponentMeta<typeof Gnb>;

const Template: ComponentStory<typeof Gnb> = (args) => <Gnb {...args}></Gnb>;

export const Default = Template.bind({});
Default.args = {};
