import TWidth from '@/shared/design/width/const/TWidth'
import {CSSProperties} from 'react'

export default function getWidth(v: TWidth): CSSProperties {
  if(v === undefined) return {width: undefined}
  if(v === 'auto') return {width: 'auto'}
  if(v ===  'fill') return {width: '100%'}
  if(v === 'hug') return {width: 'fit-content'}
  return {width: v}
}