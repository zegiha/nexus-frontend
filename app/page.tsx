'use client'

import { Col } from "@/shared/flex";
import MainFrame from "@/widgets/MainFrame/MainFrame";
import NewsFrame from "@/widgets/NewsFrame/NewsFrame";
import TagFrame from "@/widgets/TagFrame/TagFrame";


export default function Page() {
  return (
    <Col>
      <MainFrame/>
      <TagFrame/>
      <NewsFrame/>
    </Col>
  )
}