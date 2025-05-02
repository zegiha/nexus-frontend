import {TChecker} from '@/shared/checker'
import {ChangeEventHandler} from 'react'

export interface IInput {
  inputType?: 'text' | 'email' | 'password'
  value: string | null
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  name: string,
  checker?: Array<TChecker>
  error: string | null
  setError: (v: string | null) => void
}

export interface ITextInput extends Omit<IInput, 'error' | 'setError'> {
  labelContents: string
  isNecessary?: boolean
}