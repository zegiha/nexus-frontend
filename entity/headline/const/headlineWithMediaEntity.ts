import {headlineEntity} from '@/entity/headline'

export default interface headlineWithMediaEntity extends Omit<headlineEntity, 'img' | 'video'>{
  media: {
    type: 'img' | 'video'
    url: string
    alt?: string
  }
}