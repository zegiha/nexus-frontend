"use client";

import { Row, Col } from "@/shared/components/atom/flex";
import { Search } from "@/shared/components/molecule/search/ui";
import { useState, useRef, useEffect } from "react";
import { IconButton } from "@/shared/components/molecule/iconButton";
import { NotificationPanel } from "@/shared/components/molecule/notificationPanel";
import { SearchSuggestion } from "@/shared/components/molecule/searchSuggestion";
import { AnimatePresence } from "motion/react";
import style from "./style.module.css";
import Logo from "@/public/Logo";
import { useRouter } from "next/navigation";
import { useAuth } from "@/shared/contexts/AuthContext";
import { getSearchSuggestions } from "@/entity/search";

export default function Header() {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [isBellOpen, setIsBellOpen] = useState<boolean>(false);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  const bellContainerRef = useRef<HTMLDivElement>(null);

  // 디버깅용 로그
  useEffect(() => {
    console.log("Header - 인증 상태:", { isAuthenticated, user });
  }, [isAuthenticated, user]);

  // 검색어 자동완성 가져오기
  const loadSearchSuggestions = async (query: string) => {
    if (!query.trim() || query.length < 2) {
      setSearchSuggestions([]);
      return;
    }
    
    try {
      const suggestions = await getSearchSuggestions(query);
      setSearchSuggestions(suggestions);
    } catch (error) {
      console.error('검색 자동완성 로딩 실패:', error);
      setSearchSuggestions([]);
    }
  };

  // 검색어 변경시 자동완성 로딩
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue && isSearchFocused) {
        loadSearchSuggestions(searchValue);
      } else {
        setSearchSuggestions([]);
      }
    }, 300); // 디바운스

    return () => clearTimeout(timer);
  }, [searchValue, isSearchFocused]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        bellContainerRef.current &&
        !bellContainerRef.current.contains(event.target as Node)
      ) {
        setIsBellOpen(false);
      }
    }

    if (isBellOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBellOpen]);

  // 검색 실행 함수
  const handleSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsSearchFocused(false);
      setSearchSuggestions([]);
    }
  };

  // 검색 자동완성 클릭 핸들러
  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    handleSearch(suggestion);
  };

  // 엔터키 검색 핸들러
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchValue) {
      handleSearch(searchValue);
    }
  };

  return (
    <>
      <Row
        className={style.container}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <div onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
          <Logo />
        </div>
        <Row className={style.searchWrapper}>
          <div style={{ position: 'relative', width: '100%' }}>
            <Search
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              onKeyPress={handleKeyPress}
              searchResult={isSearchFocused && searchSuggestions.length > 0 ? 
                [<SearchSuggestion 
                   key="suggestions" 
                   suggestions={searchSuggestions} 
                   onSuggestionClick={handleSuggestionClick} 
                 />] : null
              }
            />
          </div>
        </Row>
        <Col width={"hug"} className={style.bellContainer}>
          <Row width={"hug"} gap={8}>
            <IconButton.transparent
              iconKey={"bell"}
              active={isBellOpen}
              onClick={() => {
                setIsBellOpen((p) => !p);
              }}
            />{" "}
            <IconButton.transparent
              iconKey={"account"}
              onClick={() =>
                router.push(isAuthenticated ? "/account" : "/auth/login")
              }
            />
          </Row>
          <AnimatePresence>
            {isBellOpen && <NotificationPanel isVisible={isBellOpen} />}
          </AnimatePresence>
        </Col>
      </Row>
    </>
  );
}
