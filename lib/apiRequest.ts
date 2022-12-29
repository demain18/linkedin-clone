import {
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
  return fetch("/data/timeline/1").then<getTimelinePostDto>((res) =>
    res.json()
  );
};
