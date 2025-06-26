import {IFlex} from '@/shared/components/atom/flex/const/type'
import {getAlignItems, getFlexDirection, getJustifyContent} from '@/shared/components/atom/flex/helper/handleFlexProperty'
import {getWidth} from '@/shared/design/width'
import {motion} from 'motion/react'
import {CSSProperties} from 'react'

export default function Flex({
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  id,
  ref,
  children,
  className,
  style: propsStyle,
  width='fill',
  onClick,
  motionProps
}: IFlex) {

  const style: CSSProperties = {
    display: 'flex',
    flexDirection: getFlexDirection(flexDirection),
    justifyContent: getJustifyContent(justifyContent),
    alignItems: getAlignItems(alignItems),
    gap,
    ...getWidth(width),
    ...propsStyle,
  }

  if(motionProps === undefined)
    return <div
      id={id}
      ref={ref}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  else {
    if(typeof motionProps === 'boolean') motionProps = {}
    return <motion.div
      id={id}
      ref={ref}
      className={className}
      style={style}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  }
}