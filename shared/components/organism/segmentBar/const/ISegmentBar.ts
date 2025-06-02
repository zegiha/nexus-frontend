import {Dispatch, SetStateAction} from 'react'

export default interface ISegmentBar {
  segments: Array<string>
  active: number
  setActive: Dispatch<SetStateAction<number>>
}