import {articleWithoutPressEntity} from '@/prev_entity/article'
import {pressSummaryEntity} from '@/prev_entity/press'

export default interface IBox {
  press: pressSummaryEntity
  headlines: Array<articleWithoutPressEntity>
  articles: Array<articleWithoutPressEntity>
}