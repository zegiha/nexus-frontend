import {articleWithoutPressEntity} from '@/prev_entity/article'
import {pressSummaryEntity} from '@/prev_entity/press'

const imageDummy: articleWithoutPressEntity = {
  id: '00d249ec-d787-42aa-bcc6-e64c9c4232ef',
  title: 'whole lotta red',
  contents: 'Whole Lotta Red is the second studio album by the American rapper Playboi Carti. It was released on December 25, 2020, by AWGE and Interscope Records.',
  img: {
    url: 'https://i.pinimg.com/736x/55/7f/30/557f30e5afa7f5c556c41c20e224e855.jpg',
    alt: 'by playboi carti'
  },
  createdAt: new Date('2025-06-02')
}

const videoDummy: articleWithoutPressEntity = {
  id: '00d249ec-d787-42aa-bcc6-e64c9c4232ef',
  title: 'whole lotta red',
  contents: 'Whole Lotta Red is the second studio album by the American rapper Playboi Carti. It was released on December 25, 2020, by AWGE and Interscope Records.',
  video: {
    url: 'https://v1.pinimg.com/videos/mc/720p/1f/38/49/1f3849b6fa3a7e90db1e8d2ee0d6cd52.mp4',
    alt: 'by playboi carti'
  },
  createdAt: new Date('2025-06-02')
}

const textDummy: articleWithoutPressEntity = {
  id: '00d249ec-d787-42aa-bcc6-e64c9c4232ef',
  title: 'whole lotta red',
  contents: 'Whole Lotta Red is the second studio album by the American rapper Playboi Carti. It was released on December 25, 2020, by AWGE and Interscope Records.',
  createdAt: new Date('2025-06-02')
}

const pressDummy: pressSummaryEntity = {
  name: 'playboi carti',
  imgUrl: 'https://i.pinimg.com/736x/d0/91/07/d09107d3cfd156bbf34e3ef8ac937b81.jpg',
}

const dummyPattern = [
  [2, 2],
  [2],
  [0, 1],
  [0, 1, 2],
  [0, 2, 1],
  [2, 0, 1],
  [0, 2, 2, 1],
]
const mask = [
  imageDummy,
  videoDummy,
  textDummy,
]

export default function getArticleByPressDummy(): Array<{
  press: pressSummaryEntity,
  headlines: Array<articleWithoutPressEntity>
  articles: Array<articleWithoutPressEntity>
}> {
  const res: Array<{
    press: pressSummaryEntity,
    headlines: Array<articleWithoutPressEntity>
    articles: Array<articleWithoutPressEntity>
  }> = []

  dummyPattern.forEach((pattern) => {
    const headlines: Array<articleWithoutPressEntity> = []
    pattern.forEach((i) => {
      headlines.push({...mask[i]})
    })
    res.push({
      press: pressDummy,
      headlines,
      articles: new Array(5).fill(textDummy)
    })
  })

  return res
}