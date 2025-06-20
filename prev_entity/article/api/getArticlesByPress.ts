import {articleWithoutPressEntity} from '@/prev_entity/article'
import getArticleByPressDummy from '@/prev_entity/article/helper/getArticleByPressDummy'
import {pressSummaryEntity} from '@/prev_entity/press'

export default async function getArticlesByPress(pressId: string): Promise<Array<{
  press: pressSummaryEntity,
  headlines: Array<articleWithoutPressEntity>
  articles: Array<articleWithoutPressEntity>
}>> {
  await new Promise(res => setTimeout(res, 2000))
  return getArticleByPressDummy()
}