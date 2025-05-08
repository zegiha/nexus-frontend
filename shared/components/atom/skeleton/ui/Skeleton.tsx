import style from './style.module.css'

export default function Skeleton({
  width,
  height,
  borderRadius=500,
}: {
  width?: number | string
  height: number | string
  borderRadius?: number
}) {
  return (
    <div
      className={style.skeleton}
      style={{
        width: width ?? '100%',
        height: height,
        borderRadius
      }}
    />
  )
}