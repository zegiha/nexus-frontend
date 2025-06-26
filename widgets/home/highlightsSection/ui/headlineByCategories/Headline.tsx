import {articleWithCategoryEntity} from '@/prev_entity/article'
import {Col, Row} from '@/shared/components/atom/flex'
import {Typo} from '@/shared/components/atom/typo'
import {Avatar} from '@/shared/components/molecule/avatar'
import {Chip} from '@/shared/components/molecule/chip'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import style from './headlinesByCategories.module.css'

export default function Headline({
  id,
  title,
  contents,
  category,
  press,
  img,
  video,
}: articleWithCategoryEntity) {
  const router = useRouter();

  const handleArticleClick = () => {
    router.push(`/article/${id}`);
  };

  return (
    <Col className={style.headlineContainer} gap={8}>
      <div onClick={handleArticleClick} className={style.articleClickable}>
        <Chip color={'gray'}>
          {category}
        </Chip>
        <Col className={classNames(style.visualPadding, style.titleWrapper)} gap={4}>
          <Typo.xxlarge color={'strong'} accent textOverflowLine={2}>
            {title}
          </Typo.xxlarge>
          <Typo.medium textOverflowLine={2}>
            {contents}
          </Typo.medium>
        </Col>
      </div>

      <Row className={style.visualPadding}>
        <Link href={`/app/press/${encodeURIComponent(press.name)}`}>
          <Avatar
            size={'medium'}
            imageUrl={press.imgUrl}
            name={press.name}
            nameColor={'alternative'}
          />
        </Link>
      </Row>

      {img && (
        <div onClick={handleArticleClick} className={style.articleClickable}>
          <Col gap={4}>
            <div className={style.headlineImgWrapper}>
              <Image
                src={img.url}
                alt={img.alt ? img.alt : 'headlineImg'}
                fill
                sizes={'768px'}
                priority={true}
                fetchPriority={'high'}
              />
            </div>
            {img.alt && (
              <div className={style.visualPadding}>
                <Typo.xsmall color={'alternative'}>{img.alt}</Typo.xsmall>
              </div>
            )}
          </Col>
        </div>
      )}

      {video && (
        <div onClick={handleArticleClick} className={style.articleClickable}>
          <Col gap={4}>
            <video
              className={style.headlineImgWrapper}
              src={video.url}
            />
            {video.alt && (
              <div className={style.visualPadding}>
                <Typo.xsmall color={'alternative'}>{video.alt}</Typo.xsmall>
              </div>
            )}
          </Col>
        </div>
      )}
    </Col>
  )
}