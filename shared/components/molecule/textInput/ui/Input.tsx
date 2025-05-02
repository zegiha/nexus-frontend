import {IInput} from '@/shared/components/molecule/textInput/const/type'
import blurHandler from '@/shared/components/molecule/textInput/helper/blurHandler'
import classNames from 'classnames'
import style from './style.module.css'

export default function Input({
  inputType='text',
  value,
  onChange,
  placeholder,
  name,
  checker,
  error,
  setError,
}: IInput) {
  return (
    <input
      id={name}
      className={classNames(
        style.textInput,
        error !== null && style.error,
      )}
      type={inputType}
      value={value ?? ''}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={() => blurHandler(
        checker,
        value,
        (v) => setError(v)
      )}
    />
  )
}