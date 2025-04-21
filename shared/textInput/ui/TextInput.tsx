'use client'

import {Col, Row} from '@/shared/flex'
import {ITextInput} from '@/shared/textInput/const/type'
import Input from '@/shared/textInput/ui/Input'
import {Typo} from '@/shared/typo'
import {useState} from 'react'
import style from './style.module.css'

export default function TextInput({
  inputType='text',
  value,
  onChange,
  placeholder,
  name,
  labelContents,
  isNecessary,
  checker,
}: ITextInput) {
  const [error, setError] = useState<string | null>(null)

  return (
    <label
      className={style.label}
      htmlFor={name}
    >
      <Col gap={4}>
        <Row justifyContent={'space-between'}>
          {labelContents}
          {isNecessary &&
            <Typo.small color={'negative'}>
              *필수
            </Typo.small>
          }
        </Row>
        <Input
          inputType={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          checker={checker}
          error={error}
          setError={(v: string | null) => setError(v)}
        />
        {error !== null &&
          <Typo.small color={'negative'}>
            {error}
          </Typo.small>
        }
      </Col>
    </label>
  )
}