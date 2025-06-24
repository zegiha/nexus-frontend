import { articleEntity } from '@/entity/article';
import { searchNewsArticles, popularSearchTerms, searchSuggestions } from '../const/searchDummyData';

// 검색 API - 뉴스 데이터 기반
export async function searchArticles(query: string): Promise<articleEntity[]> {
  // API 호출 시뮬레이션을 위한 딜레이
  await new Promise(resolve => setTimeout(resolve, 300));
  
  if (!query || query.trim().length === 0) {
    return [];
  }
  
  const searchQuery = query.toLowerCase().trim();
  
  // 뉴스 데이터에서 검색
  const results = searchNewsArticles.filter(article => {
    return (
      article.title.toLowerCase().includes(searchQuery) ||
      article.contents.toLowerCase().includes(searchQuery) ||
      article.category.toLowerCase().includes(searchQuery) ||
      article.press.name.toLowerCase().includes(searchQuery)
    );
  });
  
  return results;
}

// 검색 자동완성 API - 뉴스 데이터 기반
export async function getSearchSuggestions(query: string): Promise<string[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (!query || query.trim().length === 0) {
    return [];
  }
  
  const searchQuery = query.toLowerCase().trim();
  
  const suggestions = searchSuggestions.filter(suggestion => 
    suggestion.toLowerCase().includes(searchQuery)
  );
  
  return suggestions.slice(0, 5); // 최대 5개까지만 반환
}

// 인기 검색어 API - 뉴스 데이터 기반
export async function getPopularSearchTerms(): Promise<string[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return popularSearchTerms.slice(0, 10); // 최대 10개까지만 반환
}
