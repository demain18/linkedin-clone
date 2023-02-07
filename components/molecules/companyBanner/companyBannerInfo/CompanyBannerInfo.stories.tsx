import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyBannerInfo, { defaultProps } from "./CompanyBannerInfo";

export default {
  title: "Molecules/CompanyBanner/CompanyBannerInfo",
  component: CompanyBannerInfo,
} as unknown as ComponentMeta<typeof CompanyBannerInfo>;

const Template: ComponentStory<typeof CompanyBannerInfo> = (args) => (
  <CompanyBannerInfo {...args}></CompanyBannerInfo>
);

export const Default = Template.bind({});
Default.args = {
  bannerImg: defaultProps.bannerImg,
  logoImg: defaultProps.logoImg,
  category: defaultProps.category,
  name: defaultProps.name,
  region: defaultProps.region,
  followers: defaultProps.followers,
  coworkerName: defaultProps.coworkerName,
  emplyeesNum: defaultProps.emplyeesNum,
};
