import {articleWithoutPressEntity} from '@/entity/article'
import {pressSummaryEntity} from '@/entity/press'

export default interface IBox {
  press: pressSummaryEntity
  headlines: Array<articleWithoutPressEntity>
  articles: Array<articleWithoutPressEntity>
}