import {dummies} from '@/widgets/home/pressSection/const/dummy'
import Box from '@/widgets/home/pressSection/ui/Box'
import BoxSkeleton from '@/widgets/home/pressSection/ui/BoxSkeleton'
import style from './style.module.css'

export default function PressSection() {
  return (
    <div className={style.container}>
      {dummies.map((v, i) => (
        <Box
          key={i}
          {...v}
        />
      ))}
      <BoxSkeleton/>
    </div>
  )
}
