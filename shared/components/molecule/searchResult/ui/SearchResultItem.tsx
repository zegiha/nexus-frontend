import { articleEntity } from '@/entity/article';
import { useRouter } from 'next/navigation';
import styles from './style.module.css';

interface SearchResultItemProps {
  article: articleEntity;
  searchQuery: string;
}

export default function SearchResultItem({ article, searchQuery }: SearchResultItemProps) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/article/${article.id}`);
  };
  
  // 검색어 하이라이트 함수
  const highlightSearchTerm = (text: string, searchQuery: string) => {
    if (!searchQuery.trim()) return text;
    
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? 
        <span key={index} className={styles.highlight}>{part}</span> : part
    );
  };
  
  return (
    <div className={styles.searchResultItem} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className={styles.thumbnail}
        />
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.metadata}>
          <span className={styles.press}>{article.press.name}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.journalist}>{article.journalist.name}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.category}>{article.category}</span>
        </div>
        
        <h3 className={styles.title}>
          {highlightSearchTerm(article.title, searchQuery)}
        </h3>
        
        <p className={styles.summary}>
          {highlightSearchTerm(article.summary, searchQuery)}
        </p>
        
        <div className={styles.stats}>
          <span className={styles.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString('ko-KR')}
          </span>
          <span className={styles.viewCount}>조회 {article.viewCount.toLocaleString()}</span>
          <span className={styles.likeCount}>좋아요 {article.likeCount}</span>
        </div>
      </div>
    </div>
  );
}
