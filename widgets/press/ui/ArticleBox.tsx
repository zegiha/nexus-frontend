import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Col, Row } from "@/shared/components/atom/flex";
import style from './style.module.css'
import { Typo } from "@/shared/components/atom/typo";
import { Button } from "@/shared/components/molecule/button";
import { ArticleSummaryResponseDto } from "@/entity/const";
import Article from "./Article";
import ArticleSkeleton from "./ArticleSkeleton";

export default function ArticleBox({
  title,
  data,
}: {
  title: string
  data: InfiniteQueryObserverResult<Array<ArticleSummaryResponseDto>, AxiosError>
}) {
  if(data.data && data.data.length == 0)
    return <></>

  return (
    <Col className={style.articleBox} width='fill' gap={24}>
      <Typo.xlarge color="strong" accent>
        {title}
      </Typo.xlarge>
      <div className={style.articleGrid}>
        {data.status === 'success' && (
          <>
          {data.data.map((v, i) => (
            <Article key={i} {...v}/>
          ))}
          {data.isFetchingNextPage && (
            Array.from({length: 5}).map((_, i) => (
              <ArticleSkeleton key={i}/>
            ))
            )}
          </>
        )}
        {data.status === 'pending' && (
          Array.from({length: 10}).map((_, i) => (
            <ArticleSkeleton key={i}/>
          ))
        )}
      </div>
      {data.hasNextPage && (
        <Row justifyContent="end">
          <Button.outlined
            color='gray'
            size='large'
            onClick={() => data.fetchNextPage()}
          >
            더보기
          </Button.outlined>
        </Row>
        )}
    </Col>
  )
}