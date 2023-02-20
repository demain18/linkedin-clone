import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyJobsRecentFooter, {
  defaultProps,
} from "./CompanyJobsRecentFooter";

export default {
  title: "Molecules/CompanyJobsRecent/CompanyJobsRecentFooter",
  component: CompanyJobsRecentFooter,
} as unknown as ComponentMeta<typeof CompanyJobsRecentFooter>;

const Template: ComponentStory<typeof CompanyJobsRecentFooter> = (args) => (
  <CompanyJobsRecentFooter {...args}></CompanyJobsRecentFooter>
);

export const Default = Template.bind({});
Default.args = {};
