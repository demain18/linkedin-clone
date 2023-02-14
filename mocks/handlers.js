import { rest } from "msw";

import tossLogoimg from "public/images/dummys/company/toss.png";
import tossBannerimg from "public/images/dummys/company/toss_banner.png";
import bannerImg from "@/public/images/dummys/banner.png";
import avatarImg from "@/public/images/dummys/avatar.png";
import tossImg from "@/public/images/dummys/company/toss.png";
import lineImg from "@/public/images/dummys/company/line.png";
import kakaoImg from "@/public/images/dummys/company/kakao_pay.png";
import dummyData from "mocks/dummyData.json";

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
          active: true,
          employerLogo: kakaoImg,
          employerCompany: "카카오 페이 (kakaopay)",
          title: "인프라/클라우드 보안 담당자",
          country: "Seoul, Seoul, South Korea",
          jobForm: "On-site",
          actively: false,
          datetime: "3 weeks ago",
          applicants: 6,
        },
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
      ])
    );
  }),
  rest.get("/jobs", (req, res, ctx) => {
    const uid = req.url.searchParams.get("uid");

    return res(ctx.status(200), ctx.json(dummyData[uid]));
  }),
  rest.get("/company/funding", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(
      ctx.status(200),
      ctx.json({
        companyName: "Viva Republica (Toss)",
        totalRounds: 13,
        series: "G",
        lastSeriesDatetime: "Dec 18, 2022",
        seriesAmount: "405M",
        investorCompanyImg: kakaoImg,
        investorCompanyName: "카카오페이(Kakaopay)",
        investorCount: 5,
      })
    );
  }),
  rest.get("/company/recommend/page", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(
      ctx.status(200),
      ctx.json([
        {
          pageImg: tossImg,
          pageName: "Viva Republica (Toss)",
          pageCategory: "Conpany · Financial Services",
          pageFollowers: 14469,
        },
        {
          pageImg: lineImg,
          pageName: "LINE Plus Corp",
          pageCategory: "Company · Computer Software",
          pageFollowers: 33884,
        },
        {
          pageImg: kakaoImg,
          pageName: "카카오페이 (kakaopay)",
          pageCategory: "IT Services and IT Consulting",
          pageFollowers: 29466,
        },
      ])
    );
  }),
  rest.get("/company/banner", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(
      ctx.status(200),
      ctx.json({
        bannerImg: tossBannerimg,
        logoImg: tossLogoimg,
        name: "Viva Republica (Toss)",
        category: "Financial Services",
        region: "Seoul, Seoul",
        followers: 43332,
        coworkerName: "Brain",
        emplyeesNum: 1182,
        menuList: [
          { name: "About", active: true },
          { name: "Posts", active: false },
          { name: "Jobs", active: false },
        ],
      })
    );
  }),
  rest.get("/company/overview", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(
      ctx.status(200),
      ctx.json({
        overview:
          "대한민국 금융을 혁신해 나가는 토스와 함께할 동료를 찾습니다.\n토스의 목표는 명확합니다.\n불편하고 복잡한 금융의 문제를 토스가 끝내려고 합니다. 토스에는 이 꿈에 가슴이 뛰는 사람들이 모여있습니다. 누구에게나 상식적인 금융, 최고의 사용 경험, 쓸 때마다 행복감을 느끼는 금융 서비스를 만들고자 합니다.\n토스는 공인인증서 없이 쉽고 빠르게 송금할 수 있는 간편 송금 서비스를 선보인 이래 40여 개 이상의 다양한 서비스를 선보이며 가파르게 성장하고 있습니다.\n토스에서는 탁월한 인재들이 모여 완전히 새로운 방식으로 일하고 있습니다.\n각 분야 최고 수준의 역량을 갖춘 토스 팀원들은 보험, 결제, 은행, 증권 등 각 금융 분야에서의 혁신을 가장 중요한 목표로 두고, 자율과 책임의 원칙에 따라 상호 신뢰의 문화에서 일하고 있습니다.\n사람들의 금융 경험을 쉽고 편리하게 만들고, 사회에 긍정적인 영향을 미칠 수 있는 일을 할 수 있는 곳. 가슴 뛰는 결과를 함께 만들어나가며 최고의 동료들과 함께 성장할 수 있는 곳에서 일하고 싶지 않으신가요?\n토스에서 대한민국 금융 혁신을 위해 새로운 도전을 함께 할 멋진 동료를 찾고 있습니다.",
        website: "https://www.toss.im",
        industry: "Financial Services",
        companyEmployees: "1,001-5,000",
        companyEmployeesLinkedin: 1171,
        headquarter: "Seoul, Seoul",
      })
    );
  }),
  rest.get("/company/location", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(
      ctx.status(200),
      ctx.json([
        {
          location:
            "Arc Place 10~13F, Teheran-ro 142, Gangnam-Gu, Seoul , Seoul , Seoul Korea, KR",
        },
      ])
    );
  }),
];
