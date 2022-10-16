import QuizImg from '@assets/images/cock_quiz.png';
import Admin from '@assets/images/admin.png';
import AdminV2 from '@assets/images/admin_v2.png';

export const workExperience = [
  {
    id: 1,
    title: '콕퀴즈 서비스 개발',
    url: 'https://quiz.forc.co.kr/',
    images: QuizImg,
    description: [
      '오늘의 퀴즈 목록 등록 / 수정을 위한 백오피스 페이지 개발',
      '백 오피스에서 퀴즈 생성 시 작성 된 퀴즈 미리보기 뷰 개발',
      '유저가 퀴즈를 풀고 적립금을 받을 수 있는 콕퀴즈 웹뷰 페이지 개발',
      'Canvas API 를 활용한 복권 스크래치 기능 개발',
      'API 상태관리 및 에러 흐름 처리를 위해 React Query 도입',
      'Light house 웹페이지 분석을 이용해 웹뷰 성능 최적화 진행',
    ],
  },
  {
    id: 2,
    title: '포크 쇼핑 앱 웹뷰 스토어 개발',
    url: 'https://quiz.forc.co.kr/',
    images: Admin,
    description: [
      '스토어 내 카테고리 기능 개발',
      '스토어 카테고리 섹션별 캐러셀 제작',
      '기존 레거시의 API 상태관리를  React Query로 변경 작업',
    ],
  },
  {
    id: 3,
    title: '포크 쇼핑 백오피스 유지 보수',
    url: 'https://quiz.forc.co.kr/',
    images: AdminV2,
    description: [
      '백 오피스내 리뷰 목록 페이지 리뷰 조회 기능 및 리뷰 수정 기능 개발',
      '포인트 목록 페이지 및 포인트 설정 관리 기능 개발',
      '기존 백오피스 레거시 코드를 개선한 두번째 버전 백오피스 홈페이지 개발',
    ],
  },
  // {
  //   id: 4,
  //   title: '포크 쇼핑 백오피스 유지 보수',
  //   url: 'https://quiz.forc.co.kr/',
  //   images: AdminV2,
  //   description: [
  //     '백 오피스내 리뷰 목록 페이지 리뷰 조회 기능 및 리뷰 수정 기능 개발',
  //     '포인트 목록 페이지 및 포인트 설정 관리 기능 개발',
  //     '기존 백오피스 레거시 코드를 개선한 두번째 버전 백오피스 홈페이지 개발 진행중',
  //   ],
  // },
];
