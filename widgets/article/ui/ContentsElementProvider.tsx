import { Col, Row } from "@/shared/components/atom/flex";
import { TContentWithScrolledDescription } from "../const/props";
import { Typo } from "@/shared/components/atom/typo";
import style from './style.module.css'
import classNames from "classnames";
import { Divider } from "@/shared/components/atom/divider";
import Image from "next/image";

export default function ContentsElementProvider({
  value,
  propClass,
}: {
  value: TContentWithScrolledDescription
  propClass?: string
}) {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    console.log(id, el)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  switch(value.type) {
    case 'media':
      return <Col className={classNames(style.media, propClass)} gap={4}>
        {value.mediaType === 'image' ? (
          <Row className={style.mediaWrapper}>
            <Image
              src={value.url}
              alt={value.description ?? '기사 이미지'}
              fill
            />
            </Row>
        ):(
          <video
            className={style.mediaWrapper}
            src={value.url}
          />
        )}
        {value.description && (
          <Typo.small color="alternative">
            {value.description}
          </Typo.small>
          )}
      </Col>
    case 'subject':
      return <Row
        id={value.id}
        className={classNames(style.subject, propClass)}
      >
        <Typo.xlarge color='strong' accent>
          {value.content}
        </Typo.xlarge>
      </Row>
    case 'description':
      return <Row
        id={value.id}
        className={propClass}
      >
        <Typo.large>
          {value.content}
        </Typo.large>
      </Row>
    case 'link':
      return <Row
        className={propClass}
      >
        <Typo.large
          color="brand"
          underline
          onClick={() => window.open(value.to)}
        >
          {value.content}
        </Typo.large>
      </Row>
    case 'list':
      return <Col className={classNames(style.listContainer, propClass)} gap={12}>
        {value.contents.map((v, i) => (
          <Row id={v.id} key={i} gap={8} alignItems="center">
            <div className={style.dot}/>
            <Typo.large>
              {v.content}
            </Typo.large>
          </Row>
        ))}
      </Col>
    case 'scrolled-description':
      return <Row style={{flexWrap: 'wrap'}}>
        {value.contents.map((v, i) => (
          v.type === 'description' ? (
            <Row key={i} id={v.id} width={'hug'}>
              <Typo.large width={'hug'}>
                {v.content}
              </Typo.large>
            </Row>
          ):(
            <Row key={i} width={'hug'}>
              <Typo.large
                color="brand"
                underline
                onClick={() => scrollToId(v.to)}
              >
                {v.content}
              </Typo.large>
            </Row>
          )
        ))}
      </Row>
    case 'footnote':
      return <Row
        id={value.id}
        className={classNames(style.footnote, propClass)}
      >
        <Typo.medium color='alternative'>
          {value.content}
        </Typo.medium>
      </Row>

    default: return <></>
    }
}