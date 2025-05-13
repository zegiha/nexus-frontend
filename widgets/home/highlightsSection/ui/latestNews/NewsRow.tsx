import {headlineEntity} from '@/entity/headline'
import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {Avatar} from '@/shared/components/molecule/avatar'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import style from './latestNews.module.css'

export default function NewsRow({
  id,
  title,
  contents,
  press,
  img,
  video
}: headlineEntity) {
  const router = useRouter();
  
  const handleArticleClick = () => {
    router.push(`/article/${id}`);
  };
  
  return (
    <Row className={style.newsRow} gap={12}>
      <Col gap={4}>
        <div onClick={handleArticleClick} className={style.articleContent}>
          <Typo.medium textOverflowLine={2}>
            {title}
          </Typo.medium>
          <Typo.medium color={'alternative'} textOverflowLine={1}>
            {contents}
          </Typo.medium>
        </div>
        <div onClick={(e) => {
          e.stopPropagation();
        }}>
          <Link href={`/press/${encodeURIComponent(press.name)}`}>
            <Avatar
              size={'small'}
              imageUrl={press.imgUrl}
              name={press.name}
              nameColor={'alternative'}
            />
          </Link>
        </div>
      </Col>
        {img && (
          <div className={style.newsRowImgAndVideoWrapper} onClick={handleArticleClick}>
            <Image
              src={img.url}
              alt={img.alt ?? '헤드라인 이미지'}
              fill
              sizes={'201px'}
              priority={true}
              fetchPriority={'low'}
            />
          </div>
        )}
        {video && (
          <video
            className={style.newsRowImgAndVideoWrapper}
            src={video.url}
            onClick={handleArticleClick}
          />
        )}
      </Row>
  )
}