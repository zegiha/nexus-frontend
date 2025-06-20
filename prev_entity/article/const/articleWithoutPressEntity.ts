import {articleEntity} from '@/prev_entity/article'

export default interface articleWithoutPressEntity
  extends Omit<articleEntity, 'press'> {}