import getArticlesWithCategoryEntity from '@/entity/article/api/getArticlesWithCategoryEntity'
import getArticlesEntity from '@/entity/article/api/getArticlesEntity'
import getArticlesByPress from '@/entity/article/api/getArticlesByPress'
import getArticlesWithMediaEntity from '@/entity/article/api/getArticlesWithMediaEntity'

import articleEntity from '@/entity/article/const/articleEntity'
import articleWithCategoryEntity from '@/entity/article/const/articleWithCategoryEntity'
import articleWithMediaEntity from '@/entity/article/const/articleWithMediaEntity'
import articleWithoutPressEntity from '@/entity/article/const/articleWithoutPressEntity'

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