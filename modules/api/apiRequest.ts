import {
  getCompanyBannerDto,
  getCompanyFundingDto,
  getCompanyJobsRecentDto,
  getCompanyLocationDto,
  getCompanyOverviewDto,
  getCompanyRecommendPageDto,
  getJobsInfoDto,
  getJobsRecommendsDto,
  getTimelinePostDto,
  getUserInfoDto,
  getUserListDto,
} from "./apiRequest.dto";

export const getUserInfo = () => {
  return fetch("/data/profile").then<getUserInfoDto>((res) => res.json());
};

export const getUserList = () => {
  return fetch("/data/recommends").then<getUserListDto[]>((res) => res.json());
};

export const getTimelinePost = () => {
  return fetch(`/data/timeline`).then<getTimelinePostDto[]>((res) =>
    res.json()
  );
};

export const getJobRecommends = () => {
  return fetch("/jobs/recommends").then<getJobsRecommendsDto[]>((res) =>
    res.json()
  );
};

export const getJobsInfo = (uid: number) => {
  return fetch(`/jobs?uid=${uid - 1}`).then<getJobsInfoDto>((res) =>
    res.json()
  );
};

export const getCompanyFunding = (company: string) => {
  return fetch(
    `/company/funding?company=${company}`
  ).then<getCompanyFundingDto>((res) => res.json());
};
9;
export const getCompanyRecommendPages = () => {
  return fetch(`/company/recommend/page?company=tossbank`).then<
    getCompanyRecommendPageDto[]
  >((res) => res.json());
};

export const getCompanyBanner = (company: string) => {
  return fetch(`/company/banner?company=${company}`).then<getCompanyBannerDto>(
    (res) => res.json()
  );
};

export const getCompanyOverview = (company: string) => {
  return fetch(
    `/company/overview?company=${company}`
  ).then<getCompanyOverviewDto>((res) => res.json());
};

export const getCompanyLocation = (company: string) => {
  return fetch(`/company/location?company=${company}`).then<string>((res) =>
    res.json()
  );
};

export const getCompanyJobsRecent = (company: string) => {
  return fetch(`/company/jobs/recent?company=${company}`).then<
    getCompanyJobsRecentDto[]
  >((res) => res.json());
};
