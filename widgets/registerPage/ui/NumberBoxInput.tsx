import {Row} from '@/shared/components/atom/flex'
import {INumberBoxInput} from '@/widgets/registerPage/const/propsInterface'
import useNumberBoxInput from '@/widgets/registerPage/model/useNumberBoxInput'
import NumberBox from '@/widgets/registerPage/ui/NumberBox'
import style from './registerPage.module.css'

export default function NumberBoxInput({
  value,
  setValue,
  isError
}: INumberBoxInput) {
  const {
    inputRef,
    isFocus, setIsFocus,
    handleCursor,
  } = useNumberBoxInput({value, setValue})

  return (
    <Row className={style.numberBoxInputContainer} width={'hug'} gap={4}>
      {Array.from({length: 4}).map((_, i) => (
        <NumberBox
          key={i}
          active={(value.length === i || (i === 3 && value.length === 4)) && isFocus}
          error={isError}
          contents={value[i]}
        />
      ))}
      <input
        ref={inputRef}
        type="text"
        className={style.numberBoxInput}
        value={value}
        onClick={handleCursor}
        onChange={e =>
          setValue(e.target.value.replace(/[^0-9]/g, '').slice(0,4))
        }
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </Row>
  )
}