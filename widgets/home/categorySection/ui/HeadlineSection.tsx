import {headlineWithMediaEntity} from '@/entity/headline'
import {Col} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import Image from 'next/image'
import style from './style.module.css'

const headlineDummy: headlineWithMediaEntity = {
  id: 'id',
  title: 'the game',
  contents: 'The Game is the eighth studio album by the British rock band Queen. It was released on 20 June 1980[6] by EMI Records in the UK and by Elektra Records in the US.',
  press: {
    name: 'queen',
    imgUrl: ''
  },
  media: {
    type: 'img',
    url: 'https://i.pinimg.com/736x/3c/d3/16/3cd3168d4cca87aae0ab9030760e08d9.jpg',
    alt: 'queen, the game'
  }
}

const headlinesDummy = [
  headlineDummy,
  headlineDummy,
  headlineDummy,
  headlineDummy,
]

export default function HeadlineSection() {
  return (
    <div className={style.headlineSection}>
      <Headline {...headlineDummy}/>
      <div className={style.smallHeadlineSection}>
        {headlinesDummy.map((v, i) => (
          <Headline
            key={i}
            {...v}
          />
        ))}
      </div>
    </div>
  )
}

function Headline({
  title,
  contents,
  media
}: headlineWithMediaEntity) {
  return (
    <Col className={style.headlineContainer}>
      {media.type === 'img' ? (
        <div className={style.headlineMediaWrapper}>
          <Image
            src={media.url}
            alt={media.alt ?? '헤드라인 이미지'}
            fill
            sizes={'960px'}
          />
        </div>
      ):(
        <video
          className={style.headlineMediaWrapper}
          src={media.url}
        />
      )}
      <Col className={style.headlineContents}>
        <Typo.xxlarge color={'strong'}
          accent
          textOverflowLine={2}
        >
          {title}
        </Typo.xxlarge>
        <Typo.medium
          color={'alternative'}
          textOverflowLine={2}
        >
          {contents}
        </Typo.medium>
      </Col>
    </Col>
  )
}