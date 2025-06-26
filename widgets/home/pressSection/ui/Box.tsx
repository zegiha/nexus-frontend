import IBox from '@/widgets/home/pressSection/const/IBox'
import {Divider} from '@/shared/components/atom/divider'
import {Col} from '@/shared/components/atom/flex'
import {Avatar} from '@/shared/components/molecule/avatar'
import Article from '@/widgets/home/pressSection/ui/Article'
import HeadlineProvider from '@/widgets/home/pressSection/ui/headline/HeadlineProvider'
import style from './style.module.css'
import React from 'react'
import Link from 'next/link'

export default function Box({
  press,
  headlines,
  articles,
}: IBox) {

  return (
    <Col className={style.boxContainer} gap={24}>
      <Link href={`/app/press/${encodeURIComponent(press.name)}`}>
        <Avatar
          size={'small'}
          name={press.name}
          imageUrl={press.imgUrl}
        />
      </Link>
      <Col gap={12}>
        <HeadlineProvider headlines={headlines}/>
        <Col>
          {articles.slice(0, 3).map((v, i) => (
            <React.Fragment key={i}>
              <Article {...v} />
              {i < Math.min(articles.length, 3) - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Col>
      </Col>
    </Col>
  )
}
