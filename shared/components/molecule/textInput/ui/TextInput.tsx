'use client'

import {Col, Row} from '@/shared/components/atom/flex'
import {ITextInput} from '@/shared/components/molecule/textInput/const/type'
import Input from '@/shared/components/molecule/textInput/ui/Input'
import {Typo} from '@/shared/components/atom/typo'
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
        <Row justifyContent={'space-between'} alignItems={'center'}>
          <Typo.small width={'auto'} color={'alternative'}>
            {labelContents}
          </Typo.small>
          {isNecessary &&
            <Typo.small width={'auto'} color={'negative'}>
              필수*
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