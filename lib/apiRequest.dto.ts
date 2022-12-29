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
