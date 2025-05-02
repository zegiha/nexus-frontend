import {IFlex} from '@/shared/components/atom/flex/const/type'
import {Property} from 'csstype'

const getFlexDirection = (flexDirection: IFlex['flexDirection']): Property.FlexDirection | undefined => {
  switch (flexDirection) {
    case 'row': return 'row'
    case 'col': return 'column'
    default: return undefined
  }
}

const getJustifyContent = (justifyContent: IFlex['justifyContent']): Property.JustifyContent | undefined => {
  switch (justifyContent) {
    case 'start': return 'flex-start'
    case 'center': return 'center'
    case 'end': return 'flex-end'
    case 'space-between': return 'space-between'
    default: return undefined
  }
}

const getAlignItems = (alignItems: IFlex['alignItems']): Property.AlignItems | undefined => {
  switch (alignItems) {
    case 'start': return 'flex-start'
    case 'center': return 'center'
    case 'end': return 'flex-end'
    default: return undefined
  }
}

export {
  getFlexDirection,
  getJustifyContent,
  getAlignItems,
}