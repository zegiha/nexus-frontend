"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { articleEntity } from '@/entity/article';
import { searchArticles, getPopularSearchTerms } from '@/entity/search';
import { SearchResultItem } from '@/shared/components/molecule/searchResult';
import { Col, Row } from '@/shared/components/atom/flex';
import styles from './style.module.css';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [searchResults, setSearchResults] = useState<articleEntity[]>([]);
  const [popularTerms, setPopularTerms] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  // 검색 실행
  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }
    
    setIsLoading(true);
    try {
      const results = await searchArticles(searchQuery);
      setSearchResults(results);
      setHasSearched(true);
    } catch (error) {
      console.error('검색 실패:', error);
      setSearchResults([]);
      setHasSearched(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  // 인기 검색어 가져오기
  const loadPopularTerms = async () => {
    try {
      const terms = await getPopularSearchTerms();
      setPopularTerms(terms);
    } catch (error) {
      console.error('인기 검색어 로딩 실패:', error);
    }
  };
  
  // URL 파라미터 변경시 검색 실행
  useEffect(() => {
    if (query) {
      performSearch(query);
    } else {
      setSearchResults([]);
      setHasSearched(false);
    }
  }, [query]);
  
  // 컴포넌트 마운트시 인기 검색어 로딩
  useEffect(() => {
    loadPopularTerms();
  }, []);
  
  const renderEmptyState = () => {
    if (!hasSearched) {
      return (
        <Col className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <div className="material-symbols-rounded" style={{fontSize: '48px', color: '#CCCCCC'}}>
              search
            </div>
          </div>
          <h3 className={styles.emptyTitle}>검색어를 입력해주세요</h3>
          <p className={styles.emptyDescription}>
            뉴스 제목, 내용, 언론사, 기자명으로 검색할 수 있습니다.
          </p>
          
          {popularTerms.length > 0 && (
            <div className={styles.popularTerms}>
              <h4 className={styles.popularTitle}>인기 검색어</h4>
              <div className={styles.termTags}>
                {popularTerms.map((term, index) => (
                  <span key={index} className={styles.termTag}>
                    {index + 1}. {term}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Col>
      );
    }
    
    return (
      <Col className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <div className="material-symbols-rounded" style={{fontSize: '48px', color: '#CCCCCC'}}>
            search_off
          </div>
        </div>
        <h3 className={styles.emptyTitle}>검색 결과가 없습니다</h3>
        <p className={styles.emptyDescription}>
          다른 검색어로 다시 시도해보세요.
        </p>
      </Col>
    );
  };
  
  const renderSearchResults = () => {
    if (isLoading) {
      return (
        <Col className={styles.loadingState}>
          <div className={styles.loadingIcon}>
            <div className="material-symbols-rounded" style={{fontSize: '32px', color: '#2F89FA'}}>
              search
            </div>
          </div>
          <p className={styles.loadingText}>검색 중...</p>
        </Col>
      );
    }
    
    if (searchResults.length === 0) {
      return renderEmptyState();
    }
    
    return (
      <Col className={styles.resultsContainer}>
        <div className={styles.resultsHeader}>
          <h2 className={styles.resultsTitle}>
            '{query}' 검색 결과 ({searchResults.length}건)
          </h2>
        </div>
        
        <Col className={styles.resultsList}>
          {searchResults.map((article) => (
            <SearchResultItem 
              key={article.id} 
              article={article} 
              searchQuery={query}
            />
          ))}
        </Col>
      </Col>
    );
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {renderSearchResults()}
      </div>
    </div>
  );
}
