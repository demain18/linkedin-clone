import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GnbMenus, { defaultProps } from "./GnbMenus";

export default {
  title: "molecules/GnbMenus",
  component: GnbMenus,
} as unknown as ComponentMeta<typeof GnbMenus>;

const Template: ComponentStory<typeof GnbMenus> = (args) => (
  <GnbMenus {...args}></GnbMenus>
);

export const Default = Template.bind({});
Default.args = {
  menuList: defaultProps.menuList,
};
