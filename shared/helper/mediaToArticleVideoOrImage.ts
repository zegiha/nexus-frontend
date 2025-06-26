import {ArticleSummaryResponseDto} from '@/entity/const'
import {articleEntity} from '@/prev_entity/article'

export default function mediaToArticleVideoOrImage(media: ArticleSummaryResponseDto['media']): {
  img?: articleEntity['img'],
  video?: articleEntity['video']
} {
  if(media === undefined || media === null)
    return {}
  if(media.mediaType === 'image')
    return {
      img: {
        url: media.url,
        alt: media.description
      }
    }

  return {
    video: {
      url: media.url,
      alt: media.description
    }
  }
}