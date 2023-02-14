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
}

export interface getTimelinePostDto {
  avatarImg: StaticImageData;
  userName: string;
  companyUid: string;
  followers: number;
  datetime: string;
  desc: string;
}

export interface getJobsRecommendsDto {
  active?: boolean;
  employerLogo?: StaticImageData;
  employerCompany?: string;
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
  pageCategory?: string;
  pageFollowers?: number;
}

export interface getCompanyBannerDto {
  bannerImg?: StaticImageData;
  logoImg?: StaticImageData;
  name?: string;
  category?: string;
  region?: string;
  followers?: number;
  coworkerName?: string;
  emplyeesNum?: number;
  menuList?: [
    {
      name: string;
      active: boolean;
    }
  ];
}

export interface getCompanyOverviewDto {
  overview?: string;
  website?: string;
  industry?: string;
  companyEmployees?: string;
  companyEmployeesLinkedin?: number;
  headquarter?: string;
}

export interface getCompanyLocationDto {
  location?: string;
}
