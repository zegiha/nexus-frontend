import { articleEntity } from "@/prev_entity/article";
import { apiClient } from "@/shared/api/client";

export interface ArticleResponse {
  uuid: string;
  title: string;
  summary: {
    subject: string;
    description: string;
    footnote?: string;
  };
  content: {
    list: Array<{
      item: string;
    }>;
    link: Array<{
      url: string;
      description: string;
    }>;
    scroll: Array<{
      description: string;
    }>;
  };
  media: {
    content: string;
    description: string;
  };
  category: string;
  company: {
    name: string;
    logoUrl?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ArticleSummaryResponse {
  uuid: string;
  title: string;
  summary: {
    subject: string;
    description: string;
  };
  media?: {
    content: string;
    description: string;
  };
  category: string;
  company: {
    name: string;
    logoUrl?: string;
  };
  createdAt: string;
}

export interface ArticleAllCategoryResponse {
  category: string;
  articles: ArticleSummaryResponse[];
}

export interface ArticleAllPressResponse {
  company: {
    name: string;
    logoUrl?: string;
  };
  articles: ArticleSummaryResponse[];
}

export interface PaginatedArticleResponse {
  data: ArticleSummaryResponse[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// API 응답을 내부 entity로 변환하는 함수
function transformToArticleEntity(
  apiArticle: ArticleSummaryResponse,
): articleEntity {
  return {
    id: apiArticle.uuid,
    title: apiArticle.title,
    contents: apiArticle.summary.description,
    category: apiArticle.category,
    press: {
      name: apiArticle.company.name,
      imgUrl: apiArticle.company.logoUrl || "/default-press-logo.png",
    },
    img: apiArticle.media?.content
      ? {
          url: apiArticle.media.content,
          alt: apiArticle.media.description,
        }
      : undefined,
    createdAt: new Date(apiArticle.createdAt),
  };
}

// 전체 뉴스 조회 (페이지네이션 지원)
export async function getArticles(
  page: number = 1,
  limit: number = 20,
): Promise<articleEntity[]> {
  try {
    const response = await apiClient<PaginatedArticleResponse>({
      method: "GET",
      url: "/article",
      params: { page, limit },
    });

    // 응답 구조 확인
    if (!response || !response.data || !Array.isArray(response.data)) {
      console.warn("Invalid API response structure:", response);
      return [];
    }

    return response.data.map(transformToArticleEntity);
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}

// 모든 카테고리의 최신 헤드라인 조회
export async function getAllCategoryHeadlines(): Promise<articleEntity[]> {
  try {
    const response = await apiClient<ArticleAllCategoryResponse[]>({
      method: "GET",
      url: "/article/category/all",
    });

    // 응답이 배열인지 확인
    if (!Array.isArray(response)) {
      console.warn("API response is not an array:", response);
      return [];
    }

    const articles: articleEntity[] = [];
    response.forEach((categoryData) => {
      if (
        categoryData &&
        categoryData.articles &&
        Array.isArray(categoryData.articles)
      ) {
        categoryData.articles.forEach((article) => {
          articles.push(transformToArticleEntity(article));
        });
      }
    });

    return articles;
  } catch (error) {
    console.error("Failed to fetch category headlines:", error);
    return [];
  }
}

// 전체 언론사의 기사 조회
export async function getAllPressArticles(): Promise<{
  [pressName: string]: articleEntity[];
}> {
  try {
    const response = await apiClient<ArticleAllPressResponse[]>({
      method: "GET",
      url: "/article/press/all",
    });

    // 응답이 배열인지 확인
    if (!Array.isArray(response)) {
      console.warn("API response is not an array:", response);
      return {};
    }

    const pressByArticles: { [pressName: string]: articleEntity[] } = {};
    response.forEach((pressData) => {
      if (pressData && pressData.company && pressData.articles) {
        pressByArticles[pressData.company.name] = pressData.articles.map(
          transformToArticleEntity,
        );
      }
    });

    return pressByArticles;
  } catch (error) {
    console.error("Failed to fetch press articles:", error);
    return {};
  }
}

// 뉴스 검색
export async function searchArticles(
  query: string,
  page: number = 1,
  limit: number = 20,
): Promise<articleEntity[]> {
  try {
    const response = await apiClient<PaginatedArticleResponse>({
      method: "GET",
      url: "/article/search",
      params: { q: query, page, limit },
    });

    // 응답 구조 확인
    if (!response || !response.data || !Array.isArray(response.data)) {
      console.warn("Invalid search API response structure:", response);
      return [];
    }

    return response.data.map(transformToArticleEntity);
  } catch (error) {
    console.error(`Failed to search articles for query "${query}":`, error);
    return [];
  }
}

// 뉴스 상세 조회
export async function getArticleById(
  uuid: string,
): Promise<articleEntity | null> {
  try {
    const response = await apiClient<ArticleResponse>({
      method: "GET",
      url: `/article/${uuid}`,
    });

    return {
      id: response.uuid,
      title: response.title,
      contents: response.summary.description,
      category: response.category,
      press: {
        name: response.company.name,
        imgUrl: response.company.logoUrl || "/default-press-logo.png",
      },
      img: response.media?.content
        ? {
            url: response.media.content,
            alt: response.media.description,
          }
        : undefined,
      createdAt: new Date(response.createdAt),
    };
  } catch (error) {
    console.error(`Failed to fetch article ${uuid}:`, error);
    return null;
  }
}

// 카테고리 목록 조회
export async function getCategories(): Promise<string[]> {
  try {
    const response = await apiClient<string[]>({
      method: "GET",
      url: "/article/categories",
    });

    return response;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return ["정치", "경제", "엔터", "스포츠", "생활/문화", "IT/과학", "세계"];
  }
}

// 카테고리별 뉴스 조회 (더 이상 사용되지 않지만 호환성을 위해 유지)
export async function getArticlesByCategory(
  category: string,
  page: number = 1,
  limit: number = 20,
): Promise<articleEntity[]> {
  // 전체 헤드라인에서 특정 카테고리 필터링
  try {
    const allHeadlines = await getAllCategoryHeadlines();
    return allHeadlines
      .filter((article) => article.category === category)
      .slice(0, limit);
  } catch (error) {
    console.error(`Failed to fetch articles for category ${category}:`, error);
    return [];
  }
}
