import { Col, Row } from "@/shared/components/atom/flex";
import style from './style.module.css'
import { Typo } from "@/shared/components/atom/typo";
import { Interaction } from "@/shared/components/atom/interaction";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArticleSummaryResponseDto } from "@/entity/const";

export default function Article({
  uuid,
  title,
  contents,
  media,
}: ArticleSummaryResponseDto) {
  const router = useRouter()

  return (
    <Interaction.div
      className={style.articleContainer}
      onClick={() => router.push(`/article/${uuid}`)}
    >
      <Row gap={8}>
        <Col gap={4}>
          <Typo.medium textOverflowLine={2}>
            {title}
          </Typo.medium>
          <Typo.medium color='alternative' textOverflowLine={1}>
            {contents}
          </Typo.medium>
        </Col>
        {media && (
          media.mediaType === 'image' ? (
            <Image
              src={media.url}
              alt={media.description ?? '기사이미지'}
              width={133}
              height={80}
              style={{borderRadius: 4, objectFit: 'cover'}}
            />
          ):(
            <video
              src={media.url}
              style={{width: 133, height: 80, borderRadius: 4}}
            />
          )
        )}
      </Row>
    </Interaction.div>
  )
}