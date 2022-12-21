export const getUserInfo = () => {
  return fetch("/data/profile").then((res) => res.json());
};

export const getUserList = () => {
  return fetch("/data/recommends").then((res) => res.json());
};

export const getTimelinePost = () => {
  return fetch("/data/timeline/1").then((res) => res.json());
};
