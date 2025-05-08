import getHeadlineSummaryByCategory from '@/entity/headline/api/getHeadlineSummaryByCategory'
import getHeadline from '@/entity/headline/api/getHeadline'

import headlineEntity from '@/entity/headline/const/headlineEntity'
import categorizedHeadlineEntity from '@/entity/headline/const/categorizedHeadlineEntity'
import headlineWithMediaEntity from '@/entity/headline/const/headlineWithMediaEntity'

export {
  getHeadlineSummaryByCategory,
  getHeadline,
}

export type {
  headlineEntity,
  categorizedHeadlineEntity,
  headlineWithMediaEntity,
}