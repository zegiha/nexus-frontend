export default interface headlineEntity {
  id: string
  title: string
  contents: string
  category?: string
  press: {
    name: string
    imgUrl: string
  }
  img?: {
    url: string
    alt?: string
  }
  video?: {
    url: string
    alt?: string
  }
}
