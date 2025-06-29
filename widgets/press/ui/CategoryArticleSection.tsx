'use client'

import { ICategoryArticleSection } from "../const/ICategoryArticleSection";
import { Col } from "@/shared/components/atom/flex";
import { IOAnimation } from "../const/IOAnimation";
import useCategoryArticleSection from "../model/useCategoryArticleSection";
import ArticleBox from "./ArticleBox";

export default function CategoryArticleSection({
  name,
  category
}: ICategoryArticleSection) {
  const {
    headline,
    normal,
  } = useCategoryArticleSection({name, category})

  return (
    <Col width='fill' gap={24} motionProps={IOAnimation}>
      <ArticleBox
        title="헤드라인"
        data={headline}
      />
      <ArticleBox
        title="일반 기사"
        data={normal}
      />
    </Col>
  )
}
