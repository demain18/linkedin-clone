import { rest } from "msw";
import tossLogoImg from "@/public/images/dummys/toss/logo.png";
import bannerImg from "@/public/images/dummys/banner.png";
import avatarImg from "@/public/images/dummys/avatar.png";

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
        { name: "Brian", info: "this is info" },
        { name: "Dawnleaf", info: "this is dawnleaf" },
        {
          name: "Imzozo",
          info: "this is imzozo. born form Hhan country at 1033 year. i was not educated...",
        },
      ])
    );
  }),
  rest.get("/data/timeline/1", (req, res, ctx) => {
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
];
