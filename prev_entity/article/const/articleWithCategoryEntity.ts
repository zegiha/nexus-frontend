import {articleEntity} from '@/prev_entity/article'

export default interface articleWithCategoryEntity extends Omit<articleEntity, 'category'> {
  category: string
}