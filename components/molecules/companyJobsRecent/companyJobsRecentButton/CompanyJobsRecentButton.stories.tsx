import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyJobsRecentButton, {
  defaultProps,
} from "./CompanyJobsRecentButton";

export default {
  title: "Molecules/CompanyJobsRecent/CompanyJobsRecentButton",
  component: CompanyJobsRecentButton,
} as unknown as ComponentMeta<typeof CompanyJobsRecentButton>;

const Template: ComponentStory<typeof CompanyJobsRecentButton> = (args) => (
  <CompanyJobsRecentButton {...args}></CompanyJobsRecentButton>
);

export const Prev = Template.bind({});
Prev.args = {
  prev: defaultProps.prev,
};

export const Next = Template.bind({});
Next.args = {
  next: defaultProps.next,
};
