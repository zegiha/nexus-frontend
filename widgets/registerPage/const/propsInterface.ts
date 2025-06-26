import {Dispatch, SetStateAction} from 'react'

type setStringState = Dispatch<SetStateAction<string>>

export interface IStep {
  next: () => void
}

export interface IEmail extends IStep {
  email: string
  setEmail: setStringState
}

export interface IEmailVerify extends IStep {
  email: string
  code: string
  setCode: setStringState
}

export interface INumberBoxInput {
  value: string
  setValue: setStringState
  isError?: boolean
}

export interface IIdAndPassword extends IStep {
  email: string
  id: string
  setId: setStringState
  password: string
  setPassword: setStringState
}