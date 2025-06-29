'use client'

import { Col, Row } from "@/shared/components/atom/flex"
import { ICompanyName } from "../const/ICompanyName"
import style from './style.module.css'
import { SegmentBar } from "@/shared/components/organism/segmentBar"
import useSegmentSection from "../model/useSegmentSection"
import { AnimatePresence } from "motion/react"
import CategoryArticleSection from "./CategoryArticleSection"

export default function SegmentSection({
  name
}: ICompanyName) {
  const {
    active, setActive,
    data,
  } = useSegmentSection({name})

  return (
    <Col className={style.segmentSection} gap={24}>
      <SegmentBar
        segments={data ? data : ['전체']}
        active={active}
        setActive={setActive}
      />
      <AnimatePresence mode={'wait'}>
        {data && (
          <CategoryArticleSection
            key={`category-${data[active]}`}
            name={name}
            category={data[active]}
          />
        )}
      </AnimatePresence>
    </Col>
  )
}