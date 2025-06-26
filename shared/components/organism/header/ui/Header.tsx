"use client";

import { Row, Col } from "@/shared/components/atom/flex";
import { Search } from "@/shared/components/molecule/search/ui";
import useSearch from '@/shared/components/organism/header/model/useSearch'
import SearchResult from '@/shared/components/organism/header/ui/SearchResult'
import { useState, useRef, useEffect } from "react";
import { IconButton } from "@/shared/components/molecule/iconButton";
import { NotificationPanel } from "@/shared/components/molecule/notificationPanel";
import { AnimatePresence } from "motion/react";
import style from "./style.module.css";
import Logo from "@/public/Logo";
import { useRouter } from "next/navigation";
import { useAuth } from "@/shared/contexts/AuthContext";

export default function Header() {
  const {
    search, setSearch,
    data,
  } = useSearch()

  const [isBellOpen, setIsBellOpen] = useState<boolean>(false);
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  const bellContainerRef = useRef<HTMLDivElement>(null);

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
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              onEnterPress={() => {
                if(data && data.length > 0)
                  router.push(`/article/${data[0].uuid}`);
              }}
              searchResult={
                data && data.length > 0 ? data.map(v =>
                  <SearchResult key={v.uuid} {...v}/>
                ): null
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
