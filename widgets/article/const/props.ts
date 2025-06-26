export interface ITitleAndMetaSection {
  title: string
  originalUrl: string
  createAt: string
}

export type TContent =
  | { type: 'subject'; id?: string; content: string }
  | { type: 'description'; id?: string; content: string }
  | { type: 'footnote'; id?: string; content: string }
  | { type: 'list'; contents: { id?: string; content: string }[] }
  | { type: 'link'; content: string; to: string }
  | { type: 'scroll'; content: string; to: string }
  | { type: 'media'; mediaType: 'video' | 'image'; url: string; description?: string }

export interface IContentsSection {
  contents: TContent[]
}

export type TScrolledDescription = {
  type: 'scrolled-description'
  contents: Array<
  { type: 'description'; id?: string; content: string } |
  { type: 'scroll'; content: string; to: string }
  >
}

export type TContentWithScrolledDescription = TScrolledDescription | TContent