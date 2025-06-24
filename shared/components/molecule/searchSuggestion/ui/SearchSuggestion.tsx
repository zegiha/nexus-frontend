import { useRouter } from 'next/navigation';
import styles from './style.module.css';

interface SearchSuggestionProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export default function SearchSuggestion({ suggestions, onSuggestionClick }: SearchSuggestionProps) {
  const router = useRouter();
  
  const handleSuggestionClick = (suggestion: string) => {
    onSuggestionClick(suggestion);
    // 검색 페이지로 이동
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
  };
  
  if (suggestions.length === 0) {
    return null;
  }
  
  return (
    <div className={styles.suggestionContainer}>
      {suggestions.map((suggestion, index) => (
        <div 
          key={index} 
          className={styles.suggestionItem}
          onClick={() => handleSuggestionClick(suggestion)}
        >
          <div className="material-symbols-rounded" style={{fontSize: '20px', color: '#858585'}}>
            search
          </div>
          <span className={styles.suggestionText}>{suggestion}</span>
        </div>
      ))}
    </div>
  );
}
