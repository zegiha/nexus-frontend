import {articleWithoutPressEntity} from '@/prev_entity/article'
import {Row} from '@/shared/components/atom/flex'
import Swiper from '@/shared/components/organism/swiper/ui/Swiper'
import headlineArrayParser from '@/widgets/home/pressSection/helper/headlineArrayParser'
import FewHeadline from '@/widgets/home/pressSection/ui/headline/FewHeadline'
import PlentyHeadlineWithMedia from '@/widgets/home/pressSection/ui/headline/PlentyHeadlineWithMedia'
import PlentyHeadlineWithoutMedia from '@/widgets/home/pressSection/ui/headline/PlentyHeadlineWithoutMedia'
import React from 'react'

export default function HeadlineProvider({
  headlines
}: {
  headlines: Array<articleWithoutPressEntity>
}) {
  if (2 < headlines.length)
    return (
      <Swiper
        gap={12}
        navigationPosition={'elevatedCenter'}
      >
        {headlineArrayParser(headlines).map((v, i) => (
          <Row key={i} gap={12}>
            {
              v.length === 2 || v[0].video || v[0].img ? (
                  v.map((v, i) => (
                    <PlentyHeadlineWithMedia
                      key={i}
                      {...v}
                    />
                  ))
                ):
                v.map((v, i) => (
                  <PlentyHeadlineWithoutMedia
                    key={i}
                    {...v}
                  />
                ))
            }
          </Row>
        ))}
      </Swiper>
    )
  else
    return headlines.map((v, i) => (
      <FewHeadline
        key={i}
        {...v}
      />
    ))
}