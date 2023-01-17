import { rest } from "msw";
import tossLogoImg from "@/public/images/dummys/toss/logo.png";
import bannerImg from "@/public/images/dummys/banner.png";
import avatarImg from "@/public/images/dummys/avatar.png";
import tossImg from "@/public/images/dummys/company/toss.png";
import lineImg from "@/public/images/dummys/company/line.png";
import kakaoImg from "@/public/images/dummys/company/kakao_pay.png";

export const handlers = [
  rest.get("/data/profile", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        bannerImg: bannerImg,
        avatarImg: avatarImg,
        username: "Brian",
        bio: "React, Typescript, TDD",
        connections: 1531,
        viewed: 29933,
      })
    );
  }),
  rest.get("/data/recommends", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          avatarImg: tossImg,
          name: "Viva Republica (Toss)",
          info: "Conpany · Financial Services",
        },
        {
          avatarImg: lineImg,
          name: "LINE Plus Corp",
          info: "Company · Computer Software",
        },
        {
          avatarImg: kakaoImg,
          name: "카카오페이 (kakaopay)",
          info: "Company · Information Technology & Services",
        },
      ])
    );
  }),
  rest.get("/data/timeline?feed=1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        avatarImg: tossLogoImg,
        userName: "Viva Republica (Toss)",
        followers: 3500,
        datetime: "9h",
        desc: '"토스, 6개월간 사기 송금 피해 15만건 막았다"\n토스는 의심스러운 금융 거래를 미리 탐지하고 차단하는 FDS팀(이상거래탐지시스템팀)의 노력으로 최근 6개월 동안 토스 사용자 5만 1500여명, 약 15만건의 송금 피해 막을 수 있었어요.\n토스 FDS팀(이상거래탐지시스템팀)은 아래 두 가지 노력을 통해 토스 사용자들이 더욱 안심하고 토스를 이용할 수 있도록 만들고 있어요.\n☝🏻사용자의 기기 정보, 접속 위치, 환경, 평상시 거래 패턴 등을 머신러닝 기술을 통해 분석하여 의심스러운 송금을 차단하고 있어요!\n✌🏻 안심결제 페이지를 악용한 신종 사기 수법을 확인하고, 이에 대응하는 프로그램을 개발해 사용자들의 피해를 막고 있어요!\n토스팀이 어떻게 사기 피해 송금을 막을 수 있었는지 궁금하신 분들은 아래 피드를 확인해주세요!',
      })
    );
  }),
  rest.get("/jobs/recommends", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          employerLogo: tossLogoImg,
          employerCompany: "Viva Republica (Toss)",
          title: "Frontend Developer",
          country: "Seoul, Seoul, South Korea",
          jobForm: "On-site",
          actively: true,
          datetime: "2 weeks ago",
          applicants: 1,
        },
        {
          employerLogo: lineImg,
          employerCompany: "Line Plus Corp",
          title: "Data Platform Engineer",
          country: "Seongnam, Gyeonggi, South Korea",
          jobForm: "Hybrid",
          actively: false,
          datetime: "2 days ago",
          applicants: 0,
        },
        {
          employerLogo: kakaoImg,
          employerCompany: "카카오 페이 (kakaopay)",
          title: "Gyeonggi, South Korea",
          country: "Seoul, Seoul, South Korea",
          jobForm: "On-site",
          actively: false,
          datetime: "3 weeks ago",
          applicants: 6,
        },
      ])
    );
  }),
];
