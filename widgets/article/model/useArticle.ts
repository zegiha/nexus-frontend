'use client'

import { useArticleControllerGetArticle } from "@/entity/api/article/article"

export default function useArticle(id: string) {
  const queryRes = useArticleControllerGetArticle(id)

  return {
    ...queryRes
  }
}