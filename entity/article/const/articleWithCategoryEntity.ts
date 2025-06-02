import {articleEntity} from '@/entity/article'

export default interface articleWithCategoryEntity extends Omit<articleEntity, 'category'> {
  category: string
}