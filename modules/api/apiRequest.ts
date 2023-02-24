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

export const getTimelinePost = (param: number) => {
  return fetch(`/data/timeline?feed=${param}`).then<getTimelinePostDto>((res) =>
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

export const getCompanyBanner = () => {
  return fetch(`/company/banner?company=tossbank`).then<getCompanyBannerDto>(
    (res) => res.json()
  );
};

export const getCompanyOverview = () => {
  return fetch(
    `/company/overview?company=tossbank`
  ).then<getCompanyOverviewDto>((res) => res.json());
};

export const getCompanyLocation = () => {
  return fetch(`/company/location?company=tossbank`).then<
    getCompanyLocationDto[]
  >((res) => res.json());
};

export const getCompanyJobsRecent = () => {
  return fetch(`/company/jobs/recent?company=tossbank`).then<
    getCompanyJobsRecentDto[]
  >((res) => res.json());
};
