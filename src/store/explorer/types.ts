export enum DataType {
  'STRING'
}

export interface Attribute {
  name: string
  type: DataType
  visible: boolean
}

export interface Metadata {
  id: string
  label: string
  description: string | null
  idAttribute: string
  attributes: Attribute[]
}

export interface Toast {
  message: string
}

// eslint-disable-next-line no-use-before-define
type DataObjectValue = DataObject | string | boolean | number

export type DataObject = { [key: string]: DataObjectValue }

export type Data = {
  items: DataObject[]
  count: number
}

export interface Pagination {
  size: number
  page: number
  count: number
  loading: boolean
}

export interface Sort {
  sortColumnName: string | null
  isSortOrderReversed: boolean
}

export interface ExplorerState {
  metadata: Metadata | null | undefined
  data: Data | null | undefined
  toasts: Toast[]
}
