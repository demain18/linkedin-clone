import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyJobsRecentCard, { defaultProps } from "./CompanyJobsRecentCard";

export default {
  title: "Molecules/CompanyJobsRecent/CompanyJobsRecentCard",
  component: CompanyJobsRecentCard,
} as unknown as ComponentMeta<typeof CompanyJobsRecentCard>;

const Template: ComponentStory<typeof CompanyJobsRecentCard> = (args) => (
  <CompanyJobsRecentCard {...args}></CompanyJobsRecentCard>
);

export const Default = Template.bind({});
Default.args = {
  logoImg: defaultProps.logoImg,
  jobTitle: defaultProps.jobTitle,
  companyName: defaultProps.companyName,
  companyRegion: defaultProps.companyRegion,
  recruting: defaultProps.recruting,
  timeAgo: defaultProps.timeAgo,
};
