import {
  AnimationProps,
  DraggableProps,
  FocusHandlers,
  HoverHandlers,
  LayoutProps, MotionAdvancedProps,
  PanHandlers,
  TapHandlers
} from 'motion/react'

export default interface IMotion extends
  AnimationProps,
  PanHandlers,
  TapHandlers,
  HoverHandlers,
  FocusHandlers,
  DraggableProps,
  LayoutProps,
  MotionAdvancedProps {}