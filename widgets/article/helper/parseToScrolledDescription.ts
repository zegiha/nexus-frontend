import { TScrolledDescription } from './../const/props';
import { TContent, TContentWithScrolledDescription } from "../const/props"

type TDescOrScroll = { type: 'description'; id?: string; content: string } | { type: 'scroll'; content: string; to: string }

export default function parseToScrollededDescription(data: Array<TContent>): Array<TContentWithScrolledDescription> {
  const res: Array<TContentWithScrolledDescription> = []

  const stack: Array<TDescOrScroll> = []

  data.forEach(v => {
    if(v.type === 'description') {
      if(stack.length > 0 &&
        stack[stack.length-1].type !== 'scroll') {
        if(stack.length > 1) {
          const newData: TScrolledDescription = {
            type: 'scrolled-description',
            contents: []
          }
          while(stack.length) {
            newData.contents.push(stack[stack.length-1])
            stack.pop()
          }
          newData.contents = newData.contents.toReversed()
          res.push(newData)
        } else {
          res.push(stack[0])
          stack.pop()
        }
      }
      stack.push(v)
    } else if(v.type === 'scroll') {
      stack.push(v)
    } else {
      if(stack.length > 1) {
        const newData: TScrolledDescription = {
          type: 'scrolled-description',
          contents: []
        }
        while(stack.length) {
          newData.contents.push(stack[stack.length-1])
          stack.pop()
        }
        newData.contents = newData.contents.toReversed()
        res.push(newData)
      } else if(stack.length > 0) {
        res.push(stack[0])
        stack.pop()
      }
      res.push(v)
    }
  })

  if(stack.length > 1) {
    const newData: TScrolledDescription = {
      type: 'scrolled-description',
      contents: []
    }
    while(stack.length) {
      newData.contents.push(stack[stack.length-1])
      stack.pop()
    }
    newData.contents = newData.contents.toReversed()
    res.push(newData)
  } else if(stack.length > 0) {
    res.push(stack[0])
    stack.pop()
  }

  return res
}