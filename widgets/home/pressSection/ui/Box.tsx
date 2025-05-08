import {headlineEntity} from '@/entity/headline'
import {pressSummaryEntity} from '@/entity/press'
import {Divider} from '@/shared/components/atom/divider'
import {Col} from '@/shared/components/atom/flex'
import {Avatar} from '@/shared/components/molecule/avatar'
import Article from '@/widgets/home/pressSection/ui/Article'
import HeadlineProvider from '@/widgets/home/pressSection/ui/headline/HeadlineProvider'
import style from './style.module.css'
import React from 'react'

export default function Box({
  press,
  headlines,
  articles,
}: {
  press: pressSummaryEntity,
  headlines: Array<Omit<headlineEntity, 'press'>>
  articles: Array<{id: string, title: string}>
}) {

  return (
    <Col className={style.boxContainer} gap={24}>
      <Avatar
        size={'small'}
        name={press.name}
        imageUrl={press.imgUrl}
      />
      <Col gap={12}>
        <HeadlineProvider headlines={headlines}/>
        <Col>
          {articles.slice(0, Math.min(articles.length, 2)).map((v, i) => (
            <React.Fragment key={i}>
              <Article
                {...v}
              />
              <Divider/>
            </React.Fragment>
          ))}
          <Article
            {...articles[Math.min(articles.length, 2)]}
          />
        </Col>
      </Col>
    </Col>
  )
}
