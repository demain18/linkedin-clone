import React from "react";
import { JobInfoDescriptionStyled } from "./JobInfoDescriptionStyles";

export interface Props {
  desc?: string;
}

const JobInfoDescription = ({ desc, ...rest }: Props) => {
  return <JobInfoDescriptionStyled {...rest}>{desc}</JobInfoDescriptionStyled>;
};
export default JobInfoDescription;

export const defaultProps: Props = {
  desc: "◆ 업무내용\n- 정보보호정책 수립 및 운영\n- 신규/변경 전자금융거래 서비스/인프라 보안성 검토\n- 정보보호시스템에 대한 운영 기준 및 정책의 적정성 검토\n- 정보보호와 관련한 위험 평가 및 관리\n- 기타 IT 보안 업무\n\n◆ 지원자격\n- 금융, 인터넷, 플랫폼 기업에서 5년 이상의 보안 관련 업무 수행 경험이 있으신 분\n- 정보보호 기술에 대한 전반적인 이해를 바탕으로 위험평가/분석 업무를 수행한 경험이 있으신 분\n- 전자금융거래법, 정통망법 등의 관련 법규 준수를 위한 보안 요건에 대한 이해가 높으신 분\n- On-Prem, Cloud 및 SaaS 기반의 전자금융거래 서비스/인프라 및 보안에 대한 이해가 높으신 분\n- 정보보호시스템에 대한 운영 경험과 이해가 높으신 분\n- 열린 사고방식을 바탕으로 원활한 커뮤니케이션과 효과적인 문제해결 능력을 갖추신 분\n\n◆ 우대사항\n- 클라우드 환경에서 네트워크 보안 아키텍처를 설계/운영해 본 경험이 있으신 분\n- DevOps 및 CI/CD 파이프라인에 대한 이해 또는 관련 경험을 보유하신 분\n- 금감원 등 감독기관 대응 경험이 있으신 분\n- 정보보호 인증심사 수행 경험이 있으신 분\n\n◆ 전형절차\n서류전형 > 1차 인터뷰 > 2차 인터뷰 > 최종 합격",
};
JobInfoDescription.defaultProps = {};
