'use client'

import { Row, Col } from "@/shared/components/atom/flex";
import { ITitleAndMetaSection } from "../const/props";
import { Typo } from "@/shared/components/atom/typo";

function formatKoreanDate(date: Date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  let h = date.getHours();
  const m = String(date.getMinutes()).padStart(2, '0');
  const isPM = h >= 12;
  const period = isPM ? '오후' : '오전';
  h = h % 12;
  if (h === 0) h = 12;
  return `${yyyy}.${mm}.${dd} ${period} ${h}:${m}`;
}

export default function TitleAndMetaSection({
  title,
  originalUrl,
  createAt
}: ITitleAndMetaSection) {
  return (
    <Col gap={8}>
      <Typo.xxxlarge color="strong" accent>
        {title}
      </Typo.xxxlarge>
      <Row justifyContent="space-between">
        <Typo.small color='alternative' width={'hug'}>
          {createAt ? formatKoreanDate(new Date(createAt)) : ''}
        </Typo.small>
        <Typo.small
          color='alternative'
          width={'hug'}
          underline
          onClick={() => {window.open(originalUrl)}}
        >
          원본링크
        </Typo.small>
      </Row>
    </Col>
  )
}