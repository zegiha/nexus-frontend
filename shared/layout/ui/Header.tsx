'use client'

import { Row, Col } from "@/shared/flex"
import { Search } from "@/shared/search/ui"
import { useState } from "react"
import { IconButton } from "@/shared/iconButton"
import style from './style.module.css'
import Logo from "@/public/Logo"
// import { useRouter } from "next/router"

export default function Header() {
    const [searchValue, setSearchValue] = useState<string | null>(null)
    const [isBellOpen, setIsBellOpen] = useState<boolean>(false)
    // const route = useR

    return (
        <>
            <Row
            className={style.container}
            justifyContent={'space-between'}
            alignItems={'center'}
            
            >
                <Logo/>
                <Row className={style.searchWrapper}>
                    <Search
                    value={searchValue}
                    onChange={e => {setSearchValue(e.target.value)}}
                    searchResult={null}
                    />
                </Row>
                <Row width={'hug'} gap={8}>
                    <IconButton.transparent
                    iconKey={'bell'}
                    active={isBellOpen}
                    onClick={() => {setIsBellOpen(p => !p)}}
                    />
                    <IconButton.transparent
                    iconKey={'account'}
                    onClick={() => {}}
                    />
                </Row>
            </Row>
        </>
    )
}