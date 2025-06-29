import {articleWithMediaEntity} from '@/prev_entity/article'

const dummy: articleWithMediaEntity = {
  id: 'id',
  title: 'the game',
  contents: 'The Game is the eighth studio album by the British rock band Queen. It was released on 20 June 1980[6] by EMI Records in the UK and by Elektra Records in the US.',
  press: {
    name: 'queen',
    imgUrl: ''
  },
  media: {
    type: 'img',
    url: 'https://i.pinimg.com/736x/3c/d3/16/3cd3168d4cca87aae0ab9030760e08d9.jpg',
    alt: 'queen, the game'
  },
  createdAt:new Date('2025-06-02'),
}

export default async function getArticlesWithMediaEntity() {
  const res: Array<articleWithMediaEntity> = []
  for(let i = 0; i < 24; i++)
    res.push(dummy)
  return res
}
