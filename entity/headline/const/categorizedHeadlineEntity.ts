import {headlineEntity} from '@/entity/headline'

export default interface categorizedHeadlineEntity extends Omit<headlineEntity, 'category'> {
  category: string
}