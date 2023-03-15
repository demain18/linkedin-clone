import { StaticImageData } from "next/image";

export interface getUserInfoDto {
  bannerImg: StaticImageData;
  avatarImg: StaticImageData;
  username: string;
  bio: string;
  connections: number;
  viewed: number;
}

export interface getUserListDto {
  avatarImg: StaticImageData;
  name: string;
  info: string;
  companyUid: string;
}

export interface getTimelinePostDto {
  avatarImg: StaticImageData;
  userName: string;
  companyUid: string;
  followers: number;
  datetime: string;
  desc: string;
  images: StaticImageData[];
}

export interface getJobsRecommendsDto {
  active?: boolean;
  employerLogo?: StaticImageData;
  employerCompany?: string;
  employerCompanyUid?: string;
  title?: string;
  country?: string;
  jobForm?: string;
  actively?: boolean;
  datetime?: string;
  applicants?: number;
}

export interface getJobsInfoDto {
  title?: string;
  employerCompany?: string;
  country?: string;
  jobForm?: string;
  datetime?: string;
  company?: {
    employeeCounts?: string;
    companyKinds?: string;
  };
  connects?: {
    connection?: number;
    alummi?: number;
  };
  applicants?: number;
  skills?: string[];
  description?: string;
  companyLogo?: StaticImageData;
  companyDescription?: string;
  followers?: number;
}

export interface getCompanyFundingDto {
  companyName?: string;
  totalRounds?: number;
  round?: string;
  series?: string;
  lastSeriesDatetime?: string;
  seriesAmount?: string;
  investorCompanyImg?: StaticImageData;
  investorCompanyName?: string;
  investorCount?: number;
}

export interface getCompanyRecommendPageDto {
  pageImg?: StaticImageData;
  pageName?: string;
  pageUid?: string;
  pageCategory?: string;
  pageFollowers?: number;
}

export interface getCompanyBannerDto {
  bannerImg?: StaticImageData;
  logoImg?: StaticImageData;
  companyUid?: string;
  name?: string;
  category?: string;
  region?: string;
  followers?: number;
  coworkerName?: string;
  emplyeesNum?: number;
}

export interface getCompanyOverviewDto {
  overview?: string;
  website?: string;
  industry?: string;
  companyEmployees?: string;
  companyEmployeesLinkedin?: number;
  headquarter?: string;
  founded?: string;
  specialties?: string;
}

export interface getCompanyLocationDto {
  location?: string;
}

export interface getCompanyJobsRecentDto {
  logoImg?: StaticImageData;
  jobTitle?: string;
  companyName?: string;
  companyRegion?: string;
  recruting?: boolean;
  timeAgo?: string;
}
