import { rest } from "msw";

import tossLogoimg from "@/public/images/dummys/company/toss.png";
import tossBannerimg from "@/public/images/dummys/company/toss_banner.png";
import bannerImg from "@/public/images/banner.png";
import avatarImg from "@/public/images/avatar.png";
import tossImg from "@/public/images/dummys/company/toss.png";
import lineImg from "@/public/images/dummys/company/line.png";
import kakaoImg from "@/public/images/dummys/company/kakao_pay.png";
import dummyData from "mocks/dummyData.json";

import timeline1_1 from "@/public/images/dummys/timline/toss/1_1.png";
import timeline1_2 from "@/public/images/dummys/timline/toss/1_2.png";
import timeline1_3 from "@/public/images/dummys/timline/toss/1_3.png";
import timeline2_1 from "@/public/images/dummys/timline/toss/2_1.png";
import timeline2_2 from "@/public/images/dummys/timline/toss/2_2.png";
import timeline2_3 from "@/public/images/dummys/timline/toss/2_3.png";
import timeline3_1 from "@/public/images/dummys/timline/toss/3_1.png";

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
          companyUid: "tossbank",
        },
        {
          avatarImg: lineImg,
          name: "LINE Plus Corp",
          info: "Company · Computer Software",
          companyUid: "lineplus",
        },
        {
          avatarImg: kakaoImg,
          name: "카카오페이 (kakaopay)",
          info: "Company · Information Technology & Services",
          companyUid: "kakaopay",
        },
      ])
    );
  }),
  rest.get("/data/timeline", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          avatarImg: tossImg,
          userName: "Viva Republica (Toss)",
          companyUid: "tossbank",
          followers: 3500,
          datetime: "2d",
          desc: "Word-토스 시리즈, 여섯 번째 이야기 | '커싸’\n아마 많은 토스팀원 분들의 출근 루틴에 ‘커싸’가 빠질 수 없을 것 같은데요, 커싸(Coffee Silo)는 바로 토스에만 있는 실용적이고 매력적인 사내 카페의 호칭이에요.\n음료 제조뿐만이 아니라 토스팀의 연결고리가 되어주는 친절한 바리스타 분들이 계시는 커싸에는 언제나 커피 향과 북적거림이 가득해요. 토스의 지인을 통해 커싸에 방문하신 후에 커피 맛을 잊지 못해 토스에 입사하신 분도 있다는 우스갯소리가 있을 만큼, 커싸는 출근의 이유로도 충분한 최고의 복지중 하나랍니다.\n커싸에 직접 방문하지 않아도 사내 협업 툴인 슬랙에 있는 커싸봇을 이용해 언제 어디서나 메뉴를 주문할 수 있는데요. 원하는 메뉴와 취향에 맞는 옵션을 선택하고 주문 완료를 누르면, 바리스타 분들이 빠르게 음료를 제조해 주세요. 픽업 알림이 뜨면 바로 커싸에서 맛있는 음료를 받아볼 수 있답니다.\n커싸의 메뉴가 궁금하실 것 같아 여러분들께만 살짝 소개해 드릴게요. 커싸에는 15가지 이상의 달달하고 씁쓸한 커피 메뉴와, 5가지 이상의 감성카페에서 볼법한 논커피 메뉴, 그리고 7가지 이상의 향긋한 티 메뉴도 준비되어 있어요. 최근 신메뉴로 팀원들의 사랑을 받고 있는 음료를 사진으로 한번 확인해 보세요!️\n☕️토스팀의 일상에 즐거움을 선사하는 커피사일로의 이야기가 궁금하다면?",
          images: [timeline1_1, timeline1_2, timeline1_3],
        },
        {
          avatarImg: tossImg,
          userName: "Viva Republica (Toss)",
          companyUid: "tossbank",
          followers: 3500,
          datetime: "5d",
          desc: "Word-토스 시리즈, 일곱 번째 이야기 | '사일로’\n토스의 우선순위는 개인보다는 소속팀을, 소속팀보다는 토스팀의 미션 달성이에요. 같은 목표를 추구할 때 더 강력한 조직이 됨을 기억하며 One-team으로 일하는 것이 바로 토스팀의 핵심이죠.\n이러한 토스가 일하는 방식을 가장 잘 반영한 모습이 바로 사일로(Silo)라고 볼 수 있는데요. 토스에서 사일로란 제품 하나를 온전히 담당하는 작은 팀을 의미해요. 아래의 이미지와 같이 다양한 직군의 동료들로 구성되어 있고, 모두가 한 방향으로 빠르게 달리는 목표인 OKR을 가지고 함께 일해요. 사일로의 팀원들은 서로의 속도감을 높여주는 데에 필요한 것들을 받쳐주고 도와주면서, 팀 전체가 신속한 업무 리듬을 유지하고 강화하는 것을 지향하죠.\n사일로가 임팩트를 판단하는 기준 또한 토스팀의 미션 달성 관점에서 가장 중요한 것에 대한 고민으로부터 시작하는데요. 제품에 대한 독립적인 의사결정권이 주어지지만, 하나의 목표를 향해 달려가기에 더욱 효율적으로 협업하고 빠른 호흡으로 일을 진행하고 있답니다.\n🚀토스가 일하는 방식을 직접 경험해보고 싶다면? \nhttps://lnkd.in/g2BY-g34\n#토스 #비바리퍼블리카 #사일로 #silo #제품 #의사결정",
          images: [timeline2_1, timeline2_2, timeline2_3],
        },
        {
          avatarImg: tossImg,
          userName: "Viva Republica (Toss)",
          companyUid: "tossbank",
          followers: 3500,
          datetime: "1w",
          desc: "✋잠깐! 데이터 프로덕트에 관심있는 분들은 TUBA 팀 채용에 주목해주세요!\nTUBA란, Toss User Behavior Analyzer의 약자로, 데이터 혹은 개발에 배경 지식이 없는 팀원이라도 실험과 분석을 쉽고 올바르게 진행할 수 있도록 도와주는 플랫폼이에요.\n토스가 더 나은 제품을 만드는 것을 넘어서서 데이터 활용에 관한, 토스팀 동료들의 일하는 방식을 혁신하는데 큰 역할을 하고 있어요.\n토스의 성장을 견인하는 TUBA, 이제껏 세상에 없던 새로운 데이터 프로덕트를 함께 완성해나가요!\n \n📌토스 TUBA 팀 합류하기: https://lnkd.in/e7jgTg57\n📌토스 TUBA 팀 자세히 살펴보기: https://lnkd.in/eWbVVyJd\n#토스 #토스채용 #채용 #비바리퍼블리카 #Toss #PM #TPM #데이터엔지니어",
          images: [timeline3_1],
        },
        // {
        //   avatarImg: tossImg,
        //   userName: "Viva Republica (Toss)",
        //   companyUid: "tossbank",
        //   followers: 3500,
        //   datetime: "3w",
        //   desc: "",
        //   images: [timeline2_1, timeline2_2, timeline2_3],
        // },
      ])
    );
  }),
  rest.get("/jobs/recommends", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          active: true,
          employerLogo: kakaoImg,
          employerCompany: "카카오페이 (kakaopay)",
          employerCompanyUid: "kakaopay",
          title: "인프라/클라우드 보안 담당자",
          country: "Seoul, Seoul, South Korea",
          jobForm: "On-site",
          actively: false,
          datetime: "3 weeks ago",
          applicants: 6,
        },
        {
          employerLogo: tossImg,
          employerCompany: "Viva Republica (Toss)",
          employerCompanyUid: "tossbank",
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
          employerCompanyUid: "lineplus",
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
        companyUid: "tossbank",
        name: "Viva Republica (Toss)",
        category: "Financial Services",
        region: "Seoul, Seoul",
        followers: 43332,
        coworkerName: "Brain",
        emplyeesNum: 1182,
        menuList: [
          { name: "About", link: "", active: false },
          { name: "Posts", link: "posts", active: false },
          { name: "Jobs", link: "jobs", active: false },
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
  rest.get("/company/jobs/recent", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(
      ctx.status(200),
      ctx.json([
        {
          logoImg: tossImg,
          jobTitle: "Frontend Developer (Internal Product)",
          companyName: "Viva Republica (Toss)",
          companyRegion: "Seoul, Seoul, South Korea",
          recruting: true,
          timeAgo: "1 weeks ago",
        },
        {
          logoImg: tossImg,
          jobTitle: "Overseas Operations Manager (해외주식 야간데스크)",
          companyName: "Viva Republica (Toss)",
          companyRegion: "Seoul, Seoul, South Korea",
          recruting: true,
          timeAgo: "2 weeks ago",
        },
        {
          logoImg: tossImg,
          jobTitle: "Data Engineer (실험/분석 플랫폼)",
          companyName: "Viva Republica (Toss)",
          companyRegion: "Seoul, Seoul, South Korea",
          recruting: true,
          timeAgo: "1 months ago",
        },
      ])
    );
  }),
];
