export default interface ISegment {
  isActive: boolean
  activate: () => void
  children: string
}
