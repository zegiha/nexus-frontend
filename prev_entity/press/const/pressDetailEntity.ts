import {pressSummaryEntity} from '@/prev_entity/press'

export default interface pressDetailEntity extends pressSummaryEntity {
  description: string
  subscriberCount: number
  categories: string[]
  isSubscribed?: boolean
}
