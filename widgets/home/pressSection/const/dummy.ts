import {headlineEntity} from '@/entity/headline'
import {pressSummaryEntity} from '@/entity/press'

const dummyHeadlineWithImage: Omit<headlineEntity, 'press'> = {
  id: 'id',
  title: 'whole lotta red',
  contents: 'Whole Lotta Red is the second studio album by the American rapper Playboi Carti. It was released on December 25, 2020, by AWGE and Interscope Records.',
  img: {
    url: 'https://i.pinimg.com/736x/55/7f/30/557f30e5afa7f5c556c41c20e224e855.jpg',
    alt: 'by playboi carti'
  }
}
const dummyHeadlineWithVideo: Omit<headlineEntity, 'press'> = {
  id: 'id',
  title: 'whole lotta red',
  contents: 'Whole Lotta Red is the second studio album by the American rapper Playboi Carti. It was released on December 25, 2020, by AWGE and Interscope Records.',
  video: {
    url: 'https://v1.pinimg.com/videos/mc/720p/1f/38/49/1f3849b6fa3a7e90db1e8d2ee0d6cd52.mp4',
    alt: 'by playboi carti'
  }
}
const dummyHeadlineWithoutMedia: Omit<headlineEntity, 'press'> = {
  id: 'id',
  title: 'whole lotta red',
  contents: 'Whole Lotta Red is the second studio album by the American rapper Playboi Carti. It was released on December 25, 2020, by AWGE and Interscope Records.',
}

const dummyPress: pressSummaryEntity = {
  name: 'playboi carti',
  imgUrl: 'https://i.pinimg.com/736x/d0/91/07/d09107d3cfd156bbf34e3ef8ac937b81.jpg',
}

const dummyArticle = {
  id: 'id',
  title: 'whole lotta red',
}

export const dummies = [
  {
    headlines: [
      dummyHeadlineWithoutMedia,
      dummyHeadlineWithoutMedia,
    ],
    press: dummyPress,
    articles: [dummyArticle, dummyArticle, dummyArticle, dummyArticle]
  },
  {
    headlines: [
      dummyHeadlineWithoutMedia,
    ],
    press: dummyPress,
    articles: [dummyArticle, dummyArticle, dummyArticle, dummyArticle]
  },
  {
    headlines: [
      dummyHeadlineWithImage,
      dummyHeadlineWithVideo,
    ],
    press: dummyPress,
    articles: [dummyArticle, dummyArticle, dummyArticle, dummyArticle]
  },
  {
    headlines: [
      dummyHeadlineWithImage,
      dummyHeadlineWithVideo,
      dummyHeadlineWithoutMedia,
    ],
    press: dummyPress,
    articles: [dummyArticle, dummyArticle, dummyArticle, dummyArticle]
  },
  {
    headlines: [
      dummyHeadlineWithImage,
      dummyHeadlineWithoutMedia,
      dummyHeadlineWithVideo,
    ],
    press: dummyPress,
    articles: [dummyArticle, dummyArticle, dummyArticle, dummyArticle]
  },
  {
    headlines: [
      dummyHeadlineWithoutMedia,
      dummyHeadlineWithImage,
      dummyHeadlineWithVideo,
    ],
    press: dummyPress,
    articles: [dummyArticle, dummyArticle, dummyArticle, dummyArticle]
  },
  {
    headlines: [
      dummyHeadlineWithImage,
      dummyHeadlineWithoutMedia,
      dummyHeadlineWithoutMedia,
      dummyHeadlineWithVideo,
    ],
    press: dummyPress,
    articles: [dummyArticle, dummyArticle, dummyArticle, dummyArticle]
  },
]