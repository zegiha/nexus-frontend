import { articleEntity } from '@/entity/article';

// 검색 뉴스 데이터
export const searchNewsArticles: articleEntity[] = [
  {
    id: "search-1",
    title: "[속보] 정치권 주요 동향 - 국정감사 관련 최신 소식",
    contents: "국정감사가 본격화되면서 정치권에서 다양한 이슈들이 제기되고 있습니다. 여야 간 공방이 치열해지고 있는 가운데, 주요 현안에 대한 심도 있는 논의가 진행되고 있습니다.",
    category: "정치",
    press: {
      name: "뉴스1",
      imgUrl: "https://via.placeholder.com/32x32?text=N1"
    },
    img: {
      url: "https://via.placeholder.com/400x300?text=정치+뉴스",
      alt: "정치 뉴스 이미지"
    },
    createdAt: new Date("2024-01-20T10:30:00Z")
  },
  {
    id: "search-2",
    title: "경제 전망 - 내년 경기 회복세 지속될까",
    contents: "전문가들은 내년 경제 상황에 대해 신중한 낙관론을 제시하고 있습니다. 글로벌 경제 불확실성에도 불구하고 국내 경제의 기초 체력이 견고하다는 평가가 나오고 있습니다.",
    category: "경제",
    press: {
      name: "경제일보",
      imgUrl: "https://via.placeholder.com/32x32?text=경일"
    },
    img: {
      url: "https://via.placeholder.com/400x300?text=경제+뉴스",
      alt: "경제 뉴스 이미지"
    },
    createdAt: new Date("2024-01-20T09:15:00Z")
  },
  {
    id: "search-3",
    title: "IT 기술 동향 - AI 기술의 미래와 전망",
    content: "인공지능 기술의 발전이 다양한 산업 분야에 미치는 영향을 분석해봅니다.",
    summary: "AI 기술 발전과 산업계 영향에 대한 분석 기사입니다.",
    publishedAt: "2024-01-20T08:45:00Z",
    imageUrl: "https://via.placeholder.com/400x300?text=IT+뉴스", 
    category: "기술",
    press: {
      id: "press-3",
      name: "테크타임즈",
      logoUrl: "https://via.placeholder.com/32x32?text=TT"
    },
    journalist: {
      id: "journalist-3",
      name: "박기술",
      profileUrl: "https://via.placeholder.com/32x32?text=박기술"
    },
    viewCount: 15600,
    likeCount: 128,
    isLiked: true
  },
  {
    id: "search-4", 
    title: "사회 이슈 - 주택 정책 변화와 시민 반응",
    content: "새로운 주택 정책 발표에 따른 시민들의 다양한 반응을 살펴봅니다.",
    summary: "주택 정책 변화와 시민 반응에 대한 분석 기사입니다.",
    publishedAt: "2024-01-20T07:30:00Z",
    imageUrl: "https://via.placeholder.com/400x300?text=사회+뉴스",
    category: "사회",
    press: {
      id: "press-4", 
      name: "사회일보",
      logoUrl: "https://via.placeholder.com/32x32?text=사일"
    },
    journalist: {
      id: "journalist-4",
      name: "최사회",
      profileUrl: "https://via.placeholder.com/32x32?text=최사회"
    },
    viewCount: 7200,
    likeCount: 35,
    isLiked: false
  },
  {
    id: "search-5",
    title: "스포츠 - 프로야구 시즌 결산과 내년 전망",
    content: "2023 프로야구 시즌을 돌아보고 내년 시즌에 대한 전망을 제시합니다.",
    summary: "프로야구 시즌 결산과 내년 전망에 대한 스포츠 기사입니다.",
    publishedAt: "2024-01-20T06:15:00Z",
    imageUrl: "https://via.placeholder.com/400x300?text=스포츠+뉴스",
    category: "스포츠", 
    press: {
      id: "press-5",
      name: "스포츠투데이",
      logoUrl: "https://via.placeholder.com/32x32?text=ST"
    },
    journalist: {
      id: "journalist-5",
      name: "정스포츠",
      profileUrl: "https://via.placeholder.com/32x32?text=정스포츠"
    },
    viewCount: 9800,
    likeCount: 67,
    isLiked: false
  }
];

// 인기 검색어 더미 데이터
export const popularSearchTerms = [
  "대통령",
  "경제정책", 
  "부동산",
  "AI기술",
  "코로나19",
  "기후변화",
  "국정감사",
  "주식시장",
  "교육정책",
  "의료개혁"
];

// 검색 자동완성 더미 데이터
export const searchSuggestions = [
  "대통령 신년사",
  "대통령 지지율",
  "경제정책 변화",
  "경제 전망 2024",
  "부동산 정책",
  "부동산 시장",
  "AI 기술 발전",
  "AI 일자리", 
  "코로나19 현황",
  "기후변화 대응"
];
