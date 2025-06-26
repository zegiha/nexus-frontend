import {Icon} from '@/shared/components/atom/icon'
import {IconButton} from '@/shared/components/molecule/iconButton'
import {IInput} from '@/shared/components/molecule/textInput/const/type'
import blurHandler from '@/shared/components/molecule/textInput/helper/blurHandler'
import classNames from 'classnames'
import {useState} from 'react'
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
  const [isPassword, setIsPassword] = useState<boolean>(inputType === 'password')
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  return (
    <div className={style.inputWrapper}>
      <input
        id={name}
        className={classNames(
          style.textInput,
          error !== null && style.error,
        )}
        type={
          isPassword ?
            !passwordVisible ? 'password' : 'text' :
            inputType
        }
        value={value ?? ''}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={() => blurHandler(
          checker,
          value,
          (v) => setError(v)
        )}
        autoComplete={'off'}
        autoCorrect={'off'}
        spellCheck={false}
      />

      {isPassword && (
        <IconButton.transparent
          iconKey={passwordVisible ? 'visibility_off' : 'visibility'}
          className={style.passwordVisibilityButton}
          size={'small'}
          color={'alternative'}
          onClick={() => {setPasswordVisible(p => !p)}}
        />
      )}
    </div>
  )
}