import {articleWithoutPressEntity} from '@/entity/article'
import getArticleByPressDummy from '@/entity/article/helper/getArticleByPressDummy'
import {pressSummaryEntity} from '@/entity/press'

export default async function getArticlesByPress(): Promise<Array<{
  press: pressSummaryEntity,
  headlines: Array<articleWithoutPressEntity>
  articles: Array<articleWithoutPressEntity>
}>> {
  await new Promise(res => setTimeout(res, 2000))
  return getArticleByPressDummy()
}