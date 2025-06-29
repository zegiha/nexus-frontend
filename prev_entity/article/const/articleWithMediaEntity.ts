import {articleEntity} from '@/prev_entity/article'

export default interface articleWithMediaEntity extends Omit<articleEntity, 'img' | 'video'>{
  media: {
    type: 'img' | 'video'
    url: string
    alt?: string
  }
}