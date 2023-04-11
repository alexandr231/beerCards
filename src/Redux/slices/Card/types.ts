export type CardSliceState = {
  items: CardType[],
  loading: Status,
}

export type CardType = {
  name: string,
  id: number,
  description: string,
  image_url: string,
  isLiked: boolean
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'failed'
}