import { rest } from "msw";

import bannerImg from "@/public/images/banner.png";
import avatarImg from "@/public/images/avatar.png";
import tossImg from "@/public/images/dummys/company/toss.png";
import lineImg from "@/public/images/dummys/company/line.png";
import kakaoImg from "@/public/images/dummys/company/kakao_pay.png";
import jobDummy from "mocks/jobDummy.json";
import companyDummy from "mocks/companyDummy.json";

import toss1_1 from "@/public/images/dummys/timline/toss/1_1.png";
import toss1_2 from "@/public/images/dummys/timline/toss/1_2.png";
import toss1_3 from "@/public/images/dummys/timline/toss/1_3.png";
import toss2_1 from "@/public/images/dummys/timline/toss/2_1.png";
import toss2_2 from "@/public/images/dummys/timline/toss/2_2.png";
import toss2_3 from "@/public/images/dummys/timline/toss/2_3.png";
import toss3_1 from "@/public/images/dummys/timline/toss/3_1.png";
import line1_1 from "@/public/images/dummys/timline/line/1_1.png";
import line2_1 from "@/public/images/dummys/timline/line/2_1.png";
import line3_1 from "@/public/images/dummys/timline/line/3_1.png";
import kakaopay1_1 from "@/public/images/dummys/timline/kakaopay/1_1.png";
import kakaopay2_1 from "@/public/images/dummys/timline/kakaopay/2_1.png";

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
          images: [toss1_1, toss1_2, toss1_3],
        },
        {
          avatarImg: tossImg,
          userName: "Viva Republica (Toss)",
          companyUid: "tossbank",
          followers: 3500,
          datetime: "5d",
          desc: "Word-토스 시리즈, 일곱 번째 이야기 | '사일로’\n토스의 우선순위는 개인보다는 소속팀을, 소속팀보다는 토스팀의 미션 달성이에요. 같은 목표를 추구할 때 더 강력한 조직이 됨을 기억하며 One-team으로 일하는 것이 바로 토스팀의 핵심이죠.\n이러한 토스가 일하는 방식을 가장 잘 반영한 모습이 바로 사일로(Silo)라고 볼 수 있는데요. 토스에서 사일로란 제품 하나를 온전히 담당하는 작은 팀을 의미해요. 아래의 이미지와 같이 다양한 직군의 동료들로 구성되어 있고, 모두가 한 방향으로 빠르게 달리는 목표인 OKR을 가지고 함께 일해요. 사일로의 팀원들은 서로의 속도감을 높여주는 데에 필요한 것들을 받쳐주고 도와주면서, 팀 전체가 신속한 업무 리듬을 유지하고 강화하는 것을 지향하죠.\n사일로가 임팩트를 판단하는 기준 또한 토스팀의 미션 달성 관점에서 가장 중요한 것에 대한 고민으로부터 시작하는데요. 제품에 대한 독립적인 의사결정권이 주어지지만, 하나의 목표를 향해 달려가기에 더욱 효율적으로 협업하고 빠른 호흡으로 일을 진행하고 있답니다.\n🚀토스가 일하는 방식을 직접 경험해보고 싶다면? \nhttps://lnkd.in/g2BY-g34\n#토스 #비바리퍼블리카 #사일로 #silo #제품 #의사결정",
          images: [toss2_1, toss2_2, toss2_3],
        },
        {
          avatarImg: tossImg,
          userName: "Viva Republica (Toss)",
          companyUid: "tossbank",
          followers: 3500,
          datetime: "1w",
          desc: "✋잠깐! 데이터 프로덕트에 관심있는 분들은 TUBA 팀 채용에 주목해주세요!\nTUBA란, Toss User Behavior Analyzer의 약자로, 데이터 혹은 개발에 배경 지식이 없는 팀원이라도 실험과 분석을 쉽고 올바르게 진행할 수 있도록 도와주는 플랫폼이에요.\n토스가 더 나은 제품을 만드는 것을 넘어서서 데이터 활용에 관한, 토스팀 동료들의 일하는 방식을 혁신하는데 큰 역할을 하고 있어요.\n토스의 성장을 견인하는 TUBA, 이제껏 세상에 없던 새로운 데이터 프로덕트를 함께 완성해나가요!\n \n📌토스 TUBA 팀 합류하기: https://lnkd.in/e7jgTg57\n📌토스 TUBA 팀 자세히 살펴보기: https://lnkd.in/eWbVVyJd\n#토스 #토스채용 #채용 #비바리퍼블리카 #Toss #PM #TPM #데이터엔지니어",
          images: [toss3_1],
        },
        {
          avatarImg: lineImg,
          userName: "LINE Plus Corp",
          companyUid: "lineplus",
          followers: 43300,
          datetime: "6d",
          desc: `#articleoftheday #LINE #Commerce\n❗️❗️주목❗️❗️ E-Commerce 포지션에서 찾는 지원자 fit과 업무 환경이 궁금하다면? LINE 현직자와 캐주얼하게 대화를 나눠보세요!\n📌 [LINE] Commerce Chat ☕️ ​(~4/29, 금)\n​〰️ 신청하기 : https://lnkd.in/gcYvGw3u​\n👦🏻 "커머스를 제대로, 글로벌하게 해보고 싶다는 생각이 들더라고요"\n👩🏻 "더 많은 MAU를 가지고 있는 회사에서 일해보고 싶다는 생각에 LINE으로 오게 되었어요"\n​흔히 선망 받는 IT 및 대기업 재직경험을 뒤로하고, LINE에 합류하여 글로벌 커머스 사업을 담당하는 <플랫폼 개발자, 스마트스토어 기획자,프러덕트 디자이너, 사업팀> 4인의 인터뷰를 공개합니다! 👀\nhttps://lnkd.in/gmc-PFCQ\n📌 Global E-Commerce 채용공고가 궁금하다면?\n〰️ 공고보기 : https://lnkd.in/g9gixq_q`,
          images: [line1_1],
        },
        {
          avatarImg: lineImg,
          userName: "LINE Plus Corp",
          companyUid: "lineplus",
          followers: 43300,
          datetime: "1w",
          desc: `또 한 번 새로운 근무 패러다임을 제시한 LINE의 'Hybrid Work 2.0'이 아래 기사에 소개되었습니다.\nLINE은 변화하는 환경에 맞추어 발 빠르게 LINER 의 몰입을 지원하기 위해, 이미 지난해 7월 국내 타 도시에서 근무가 가능한 Hybrid Work 1.0을 도입한 바가 있는데요.\n올 7월부터는 국내는 물론 해외 지역에서의 근무도 가능해졌습니다.\n \n🔗 기사 바로가기 : https://lnkd.in/gGyVEWUn\n \n"OO님은 어떤 국가에서 일해 볼 계획이에요?"\n최근 LINER들이 팀 멤버들과 이야기하는 자연스러운 주제 중 하나입니다.  \n \n이미 LINE의 주요 마켓인 태국, 인도네시아, 일본 등에서 신뢰와 자율성을 바탕으로 책임감 있게 해외 리모트 근무를 하고 계신 LINER를 쉽게 찾아 볼 수 있는데요,\n기사 헤드라인에서 자주 보이는 몰디브, 발리, 괌, 사이판 뿐만 아니라 싱가포르, 말레이시아, 베트남, 호주 등 다양한 글로벌 환경에서 일하며 새로운 경험을 얻고 리프레시를 통해 업무 효율을 높이고 있습니다.\n \n또, 매월 17만원(연간 204만원) 상당의 현금성 포인트인 'LINE Hybrid Work Point'로 리모트 업무 환경 구축이나 사무실 근무 시에 자유롭게 사용할 수 있다는 점!\n \nLINER들이 최적의 근무 환경을 찾을 수 있도록, LINE은 앞으로도 회사 차원의 지원을 계속 모색해 나갈 예정입니다.\n \n앞으로가 더 기대되는 LINE에서 함께 일하고 싶으신 분들은?\n🔗 https://lnkd.in/gtsHMGHt`,
          images: [line2_1],
        },
        {
          avatarImg: lineImg,
          userName: "LINE Plus Corp",
          companyUid: "lineplus",
          followers: 43300,
          datetime: "2w",
          desc: `🎬 [LINE:NEWS] LINE Messenger STYLE (Chapter .1)\n#LINE 메신저를 누구보다 효과적으로 사용하는 방법!\n포인트만 골라 다 담아보았습니다. 🙌🏻\n〰️ LINE Sticker, 통역 기능, Letter Sealing, 채팅 텍스트 서식 적용까지! 〰️\n📌 LINE Messenger에서만 쓸 수 있는 🍯기능 확인하기\nhttps://lnkd.in/gJx7EMtF`,
          images: [line3_1],
        },
        {
          avatarImg: kakaoImg,
          userName: "카카오페이 (kakopay)",
          companyUid: "kakaopay",
          followers: 29812,
          datetime: "9h",
          desc: `지난번 크루 브이로그 어시스턴트편에 이어, 두 번째 브이로그 '주니어 개발자'편을 소개합니다~~ \n카카오페이에서 주니어 개발자분은 어떻게 일하고 계실까요?\n경력에 상관없이 빠르게 만들어지고 있는 프로페셔널한 모습부터 시작해서😎\n개발자가 직접 얘기해주는 '받았던 면접 질문', 그리고 '채용연계형 인턴 과정'까지\n여러분이 궁금해하실 수 있는 많은 부분을 한 곳에 담아보았습니다. 🤗\n'KAFE☕️'부터 함께 가보실까요~~`,
          images: [kakaopay1_1],
        },
        {
          avatarImg: kakaoImg,
          userName: "카카오페이 (kakopay)",
          companyUid: "kakaopay",
          followers: 29812,
          datetime: "2d",
          desc: `[카카오페이 iOS 개발자의 채용 과제 서버 개발기 with Vapor]\n카카오페이 iOS 개발자들이 채용 과제를 어떻게 준비했을까요?\n과제를 만들려면 결국 OpenAPI나 Json mock에 의지 해야 하고, 과제 아이디어와 평가 요소에 제한이 생길 수밖에 없는 게 현실인데요!\n카카오페이 iOS 과제는 단순한 OpenAPI를 활용한게 아닌,\n✨미래에 같이 일할 동료들이✨ Swift로 직접 개발한 서버로 과제 전형을 진행해보실 수 있습니다!\n카카오페이 기술블로그에서 자세한 채용 과제 서버 개발기를 확인해주세요 :)\n►https://lnkd.in/d2YQKg-r\n👨‍💻 함께 할 분들을 모시고 있어요! (지원자격 알아보기)\n✔️ Swift/Objective-C의 기본에 대한 이해를 가지고 있는 분\n✔️ iOS 클라이언트 개발 철학에 대한 이해를 가지고 있는 분\n✔️ iOS 개발 트렌드에 대한 관심을 가지고 있는 분\n✔️ 서비스를 런칭하고 운영해보신 경험을 가지고 있는 분\n✔️ 동료의 성장과 본인의 성장을 함께 도모 하시는 분\n🏃‍♀️카카오페이 iOS 개발자 채용공고 바로가기\n►https://lnkd.in/dqszPeNV\n#ios #카카오페이 #채용 #Swift #카카오페이기술블로그`,
          images: [],
        },
        {
          avatarImg: kakaoImg,
          userName: "카카오페이 (kakopay)",
          companyUid: "kakaopay",
          followers: 29812,
          datetime: "1d",
          desc: `🔍 if(kakao)dev2022 컨퍼런스에서 카카오페이의 경험을 공유하게 되었습니다!\n특히 이번에는 기술세션 외에도 개발 조직의 일하는 문화와 카카오페이의 성장과정을 모두 공개합니다.\n인상깊은 경험을 함께 나누고 좋은 인사이트를 드리고 싶은 마음을 꾹꾹 눌러 담아 열심히 준비했습니다.\n자세한 내용은 영상을 통해 살펴보세요. 💝 ➡️ 💌\n[기술세션-Culture트랙]\n- 카카오페이 서버 개발자로 일한다는 것\n- 카카오페이 워크플랫폼 개발자로 일한다는 것\n- 카카오페이 성장스토리와 일하는 문화\n- 이력서 작성이 처음이라면, 채용팀이 알려주는 개발자 이력서 작성 꿀팁!\nhttps://lnkd.in/gWQwFzX6`,
          images: [kakaopay2_1],
        },
      ])
    );
  }),
  rest.get("/jobs/recommends", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          active: true,
          uid: 1,
          employerLogo: kakaoImg,
          employerCompany: "카카오페이 (kakaopay)",
          employerCompanyUid: "kakaopay",
          title: "인프라/클라우드 보안 담당자",
          country: "Seoul, Seoul, South Korea",
          jobForm: "On-site",
          actively: false,
          datetime: "3 weeks ago",
          applicants: 26,
        },
        {
          uid: 2,
          employerLogo: tossImg,
          employerCompany: "Viva Republica (Toss)",
          employerCompanyUid: "tossbank",
          title: "Frontend Developer",
          country: "Seoul, Seoul, South Korea",
          jobForm: "On-site",
          actively: true,
          datetime: "2 weeks ago",
          applicants: 73,
        },
        {
          uid: 3,
          employerLogo: lineImg,
          employerCompany: "Line Plus Corp",
          employerCompanyUid: "lineplus",
          title: "Data Platform Engineer",
          country: "Seongnam, Gyeonggi, South Korea",
          jobForm: "Hybrid",
          actively: false,
          datetime: "2 days ago",
          applicants: 46,
        },
      ])
    );
  }),
  rest.get("/jobs", (req, res, ctx) => {
    const uid = req.url.searchParams.get("uid");

    return res(ctx.status(200), ctx.json(jobDummy[uid]));
  }),
  rest.get("/company/funding", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(ctx.status(200), ctx.json(companyDummy[company]?.["funding"]));
  }),
  rest.get("/company/recommend/page", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          pageImg: tossImg,
          pageName: "Viva Republica (Toss)",
          pageUid: "tossbank",
          pageCategory: "Conpany · Financial Services",
          pageFollowers: 14469,
        },
        {
          pageImg: lineImg,
          pageName: "LINE Plus Corp",
          pageUid: "lineplus",
          pageCategory: "Company · Computer Software",
          pageFollowers: 33884,
        },
        {
          pageImg: kakaoImg,
          pageName: "카카오페이 (kakaopay)",
          pageUid: "kakaopay",
          pageCategory: "IT Services and IT Consulting",
          pageFollowers: 29466,
        },
      ])
    );
  }),
  rest.get("/company/banner", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(ctx.status(200), ctx.json(companyDummy[company]?.["banner"]));
  }),
  rest.get("/company/overview", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(ctx.status(200), ctx.json(companyDummy[company]?.["overview"]));
  }),
  rest.get("/company/location", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(ctx.status(200), ctx.json(companyDummy[company]?.["location"]));
  }),
  rest.get("/company/jobs/recent", (req, res, ctx) => {
    const company = req.url.searchParams.get("company");

    return res(ctx.status(200), ctx.json(companyDummy[company]?.["jobs"]));
  }),
];
