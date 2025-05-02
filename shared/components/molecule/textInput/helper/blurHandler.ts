import {ITextInput} from '@/shared/components/molecule/textInput/const/type'

export default function blurHandler (
  checker: ITextInput['checker'],
  value: ITextInput['value'],
  setError: (v: string | null) => void,
) {
  if(checker) {
    let sw = true
    for(let i = 0; i < checker.length; i++) {
      const res = checker[i](value)
      if(res === null) continue
      setError(res)
      sw = false
      break
    }
    if(sw) setError(null)
  }
}