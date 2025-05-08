import {headlineEntity} from '@/entity/headline'

export default function headlineArrayParser(raw: Array<Omit<headlineEntity, 'press'>>): Array<Array<Omit<headlineEntity, 'press'>>> {
  const res: Array<Array<Omit<headlineEntity, 'press'>>> = []
  let tmp: Array<Omit<headlineEntity, 'press'>> = []
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