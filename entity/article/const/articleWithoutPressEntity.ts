import {articleEntity} from '@/entity/article'

export default interface articleWithoutPressEntity
  extends Omit<articleEntity, 'press'> {}