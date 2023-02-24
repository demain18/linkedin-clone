import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyBannerMenu, { defaultProps } from "./CompanyBannerMenu";

export default {
  title: "Molecules/CompanyBanner/CompanyBannerMenu",
  component: CompanyBannerMenu,
} as unknown as ComponentMeta<typeof CompanyBannerMenu>;

const Template: ComponentStory<typeof CompanyBannerMenu> = (args) => (
  <CompanyBannerMenu {...args}></CompanyBannerMenu>
);

export const Default = Template.bind({});
Default.args = {
  children: defaultProps.children,
};

export const Active = Template.bind({});
Active.args = {
  children: defaultProps.children,
  active: true,
};
