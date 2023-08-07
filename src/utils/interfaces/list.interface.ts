export interface data {
  totalAssets: number
  result: Array<object>
  itemsPerPage: number
}
export interface DataResponseI {
  id?: number
  page?: number
  result: ResultItemI[]
  totalAsset?: number
}

export interface ResultItemI {
  id: number
  name: string
  imageUri: string
}
