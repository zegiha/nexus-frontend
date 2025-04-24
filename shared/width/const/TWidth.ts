type TWidth =
  'auto' |
  'fill' |
  'hug' |
  {
    unit: 'px',
    value: number
  } |
  {
    unit: 'flex',
    value: number
  } |
  {
    unit: '%',
    value: number
  } |
  undefined

export default TWidth