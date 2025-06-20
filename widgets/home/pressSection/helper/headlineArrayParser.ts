import {articleWithoutPressEntity} from '@/prev_entity/article'

export default function headlineArrayParser(raw: Array<articleWithoutPressEntity>): Array<Array<articleWithoutPressEntity>> {
  const res: Array<Array<articleWithoutPressEntity>> = []
  let tmp: Array<articleWithoutPressEntity> = []
  raw.forEach((item) => {
    if(!item.video && !item.img) {
      if(tmp.length === 1) res.push(tmp)
      res.push([item])
      tmp = []
    } else {
      tmp.push(item)
      if(tmp.length === 2) {
        res.push(tmp)
        tmp = []
      }
    }
  })
  if(tmp.length > 0)
    res.push(tmp)
  return res
}