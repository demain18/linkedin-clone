import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as unknown as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Home = Template.bind({});
Home.args = {};
