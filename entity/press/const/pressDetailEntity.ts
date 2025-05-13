import {pressSummaryEntity} from '@/entity/press'

export default interface pressDetailEntity extends pressSummaryEntity {
  description: string
  subscriberCount: number
  categories: string[]
  isSubscribed?: boolean
}
