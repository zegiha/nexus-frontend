import {ReactNode} from 'react'

export interface ISwiperNavigation {
  position: 'bottom' | 'elevatedCenter'
  hovered: boolean
  nextFunc: () => void
  prevFunc: () => void
}

export interface ISwiper {
  children: Array<ReactNode> | ReactNode
  loop?: boolean
  navigationPosition: ISwiperNavigation['position']
  gap?: number
}