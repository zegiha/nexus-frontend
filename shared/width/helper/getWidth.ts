import TWidth from '@/shared/width/const/TWidth'
import {CSSProperties} from 'react'

export default function getWidth(v: TWidth): CSSProperties {
  if(v === undefined) return {width: 'auto'}
  if(v ===  'fill') return {width: '100%'}
  if(v === 'hug') return {width: 'fit-content'}
  if(v.unit === 'px') return {width: v.value}
  if(v.unit === 'flex') return {width: undefined, flex: v.value}
  if(v.unit === '%') return {width: `${v.value}%`}
  return {width: undefined}
}