import {pressSummaryEntity} from '@/prev_entity/press'

export default interface articleEntity {
  id: string
  title: string
  contents: string
  category?: string
  press: pressSummaryEntity,
  img?: {
    url: string
    alt?: string
  }
  video?: {
    url: string
    alt?: string
  }
  createdAt: Date
}
