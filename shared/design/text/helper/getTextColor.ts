import {TTextColor} from '@/shared/design/text'
import semantic from '@/shared/design/const/semantic'

export default function getTextColor(v: TTextColor) {
  if(v === undefined) return semantic.light.label.normal
  if(
    v === 'strong' ||
    v === 'normal' ||
    v === 'alternative' ||
    v === 'link'
  ) return semantic.light.label[v]
  if(v === 'reverse-black') return semantic.light.reverse.black
  if(v === 'reverse-white') return semantic.light.reverse.white
  if(v === 'static-black') return semantic.light.static.black
  if(v === 'static-white') return semantic.light.static.white
  if(v === 'brand') return semantic.light.brand.normal
  return semantic.light.status[v]
}