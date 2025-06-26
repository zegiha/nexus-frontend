'use client'

import { Col } from "@/shared/components/atom/flex";
import { IContentsSection } from "../const/props";
import style from './style.module.css'
import parseToScrollededDescription from "../helper/parseToScrolledDescription";
import ContentsElementProvider from "./ContentsElementProvider";

export default function ContentsSection({
  contents
}: IContentsSection) {
  return (
    <Col>
    {parseToScrollededDescription(contents).map((v, i) => {
      if(i === 0)
        return <ContentsElementProvider key={i} value={v} propClass={style.firstContents}/>
      else
        return <ContentsElementProvider key={i} value={v}/>
    })}
    </Col>
  )
}
