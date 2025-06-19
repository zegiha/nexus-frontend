'use client'

import { Row, Col } from "@/shared/components/atom/flex"
import { Search } from "@/shared/components/molecule/search/ui"
import { useState, useRef, useEffect } from "react"
import { IconButton } from "@/shared/components/molecule/iconButton"
import { NotificationPanel } from "@/shared/components/molecule/notificationPanel"
import { AnimatePresence } from "motion/react"
import style from './style.module.css'
import Logo from "@/public/Logo"
import { useRouter } from "next/navigation" 

export default function Header() {
    const [searchValue, setSearchValue] = useState<string | null>(null)
    const [isBellOpen, setIsBellOpen] = useState<boolean>(false)
    const router = useRouter()
    const bellContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (bellContainerRef.current && !bellContainerRef.current.contains(event.target as Node)) {
                setIsBellOpen(false)
            }
        }

        if (isBellOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isBellOpen]) 

    return (
        <>
            <Row
            className={style.container}
            justifyContent={'space-between'}
            alignItems={'center'}
            >
                <div onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
                    <Logo/>
                </div>
                <Row className={style.searchWrapper}>
                    <Search
                    value={searchValue}
                    onChange={e => {setSearchValue(e.target.value)}}
                    searchResult={['hoho']}
                    />
                </Row>
                <Col width={'hug'} className={style.bellContainer}>
                    <Row width={'hug'} gap={8}>
                        <IconButton.transparent
                        iconKey={'bell'}
                        active={isBellOpen}
                        onClick={() => {setIsBellOpen(p => !p)}}
                        />
                        <IconButton.transparent
                        iconKey={'account'}
                        onClick={() => router.push('/auth/login')}
                        />
                    </Row>
                    <AnimatePresence>
                        {isBellOpen && (
                            <NotificationPanel isVisible={isBellOpen} />
                        )}
                    </AnimatePresence>
                </Col>
            </Row>
        </>
    )
}