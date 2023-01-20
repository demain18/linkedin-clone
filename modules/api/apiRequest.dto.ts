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
}
