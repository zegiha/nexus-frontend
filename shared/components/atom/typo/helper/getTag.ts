import IBaseTypo from '@/shared/components/atom/typo/const/IBaseTypo'

export default function getTag(type: IBaseTypo['size']) {
  switch(type) {
    case 'xxxlarge': return 'h1'
    case 'xxlarge': return 'h1'
    case 'xlarge': return 'h2'
    case 'large': return 'p'
    case 'medium': return 'p'
    case 'small': return 'small'
    case 'xsmall': return 'small'
  }
}