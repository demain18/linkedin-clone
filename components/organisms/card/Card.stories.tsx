import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Organisms/Card",
  component: Card,
  parameters: { controls: { sort: "requiredFirst" } },
} as unknown as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatarUri: "static/media/public/images/avatar.png",
  title: "Dylan",
  datetime: "17h",
};
