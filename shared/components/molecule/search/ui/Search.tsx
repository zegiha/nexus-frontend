import {motionTransition} from '@/shared/design/motion'
import {Col, Row} from '@/shared/components/atom/flex'
import {Icon} from '@/shared/components/atom/icon'
import classNames from 'classnames'
import {AnimatePresence} from 'motion/react'
import {ChangeEvent, ReactNode, useRef, useState} from 'react'
import style from './style.module.css'

interface ISearch {
  value: string | null
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  searchResult: Array<ReactNode> | null
}

export default function Search({
  value,
  onChange,
  placeholder='검색어를 입력해주세요',
  searchResult,
}: ISearch) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <Col className={style.wrapper} gap={4}>
      <Row
        className={classNames(
          style.searchBar,
          [
            isActive && style.searchBarActive,
          ]
        )}
        alignItems="center"
        gap={4}
        onClick={() => {inputRef.current?.focus()}}
      >
        <Icon
          iconKey='search'
          color='alternative'
        />
        <input
          ref={inputRef}
          type="search"
          className={style.input}
          value={value ?? ''}
          onChange={onChange}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          placeholder={placeholder}
        />
      </Row>
      <AnimatePresence>
        {isActive && searchResult !==  null && (
          <Col
            className={style.resultContainer}
            width={'fill'}
            motionProps={{
              initial: {opacity: 0, y: -4},
              animate: {opacity: 1, y: 0},
              exit: {opacity: 0, y: -4},
              transition: motionTransition.fast
            }}
          >
            {searchResult.map((v, i) => (
              <Row key={i}>
                {v}
              </Row>
            ))}
          </Col>
        )}
      </AnimatePresence>
    </Col>
  )
}