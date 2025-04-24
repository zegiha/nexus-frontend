'use client'

import {Button, RoundButton} from '@/shared/button'
import {Col} from '@/shared/flex'
import Search from '@/shared/searchBar/ui/Search'
import {TextInput} from '@/shared/textInput'
import {useState} from 'react'

export default function Home() {
  const [v, sv] = useState<string | null>(null)
  const [t, st] = useState<Array<string> | null>(null)

  return (
    <Col style={{padding: '240px 0'}} alignItems={'center'} motionProps={{
    }}>
      <Col style={{maxWidth: 360}} gap={24}>
        <Search
          value={v}
          onChange={e => {sv(e.target.value); st(['haah', 'ahads', 'asd', 'hoh', 'haho', 'hoho', 'haha'])}}
          searchResult={t ? t.map(v => <div style={{height: 400}}>{v}</div>) : null}
        />
        <Button.solid color={'white'} size={'medium'} onClick={() => {}}>
          ha
        </Button.solid>
        <RoundButton.solid color={'brand'} size={'small'} onClick={() => {}}>
          haha
        </RoundButton.solid>
        <RoundButton.solid color={'brand'} size={'medium'} onClick={() => {}}>
          haha
        </RoundButton.solid>
        <TextInput name={'asd'} value={''} onChange={e => sv(e.target.value)} labelContents={'asd'}/>
      </Col>
    </Col>
  )
}
