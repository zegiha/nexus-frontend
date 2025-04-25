import {ReactNode} from 'react'

export interface ISwiperNavigation {
  position: 'bottom' | 'elevatedCenter'
  nextFunc: () => void
  prevFunc: () => void
}

export interface ISwiper {
  children: Array<ReactNode> | ReactNode
  navigationPosition: ISwiperNavigation['position']
}