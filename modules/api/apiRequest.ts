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

export const getJobsInfo = (param: number) => {
  return fetch(`/jobs?uid=${param}`).then<getJobsInfoDto>((res) => res.json());
};

export const getCompanyFunding = () => {
  return fetch(`/company/funding?company=tossbank`).then<getCompanyFundingDto>(
    (res) => res.json()
  );
};

export const getCompanyRecommendPages = () => {
  return fetch(`/company/recommend/page?company=tossbank`).then<
    getCompanyRecommendPageDto[]
  >((res) => res.json());
};

export const getCompanyBanner = (param: string) => {
  return fetch(`/company/banner?company=${param}`).then<getCompanyBannerDto>(
    (res) => res.json()
  );
};

export const getCompanyOverview = (param: string) => {
  return fetch(
    `/company/overview?company=${param}`
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
