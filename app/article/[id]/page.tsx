'use client'

import { Row, Col } from "@/shared/components/atom/flex"
import { useParams } from "next/navigation"
import style from './style.module.css'
import { TitleAndMetaSection, useArticle, ContentsSection } from "@/widgets/article"
import { Avatar } from "@/shared/components/molecule/avatar"
import { useRouter } from "next/navigation"
import { HeaderLayout } from "@/shared/components/organism/header"

export default function Page() {
  const {id} = useParams<{id: string}>()
  const router = useRouter()
  const {
    data,
    status
  } = useArticle(id)

  if(status === 'success' && data)return (
    <HeaderLayout>
      <Col className={style.container} alignItems="center">
        <Col className={style.wrapper} gap={24}>
          <TitleAndMetaSection
            title={data.title}
            originalUrl={data.originalUrl}
            createAt={data.createAt}
          />
          <Row
            className={style.avatar}
            width={'hug'}
            onClick={() => router.push(`/press/${data.company.name}`)}
          >
            <Avatar
              size="medium"
              name={data.company.name}
              imageUrl={data.company.profileImageUrl}
            />
          </Row>
          <ContentsSection contents={data.contents}/>
        </Col>
      </Col>
    </HeaderLayout>
  )
}