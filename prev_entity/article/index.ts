import getArticlesWithCategoryEntity from '@/prev_entity/article/api/getArticlesWithCategoryEntity'
import getArticlesEntity from '@/prev_entity/article/api/getArticlesEntity'
import getArticlesByPress from '@/prev_entity/article/api/getArticlesByPress'
import getArticlesWithMediaEntity from '@/prev_entity/article/api/getArticlesWithMediaEntity'

import articleEntity from '@/prev_entity/article/const/articleEntity'
import articleWithCategoryEntity from '@/prev_entity/article/const/articleWithCategoryEntity'
import articleWithMediaEntity from '@/prev_entity/article/const/articleWithMediaEntity'
import articleWithoutPressEntity from '@/prev_entity/article/const/articleWithoutPressEntity'

export {
  getArticlesWithCategoryEntity,
  getArticlesEntity,
  getArticlesByPress,
  getArticlesWithMediaEntity,
}

export type {
  articleEntity,
  articleWithCategoryEntity,
  articleWithMediaEntity,
  articleWithoutPressEntity,
}