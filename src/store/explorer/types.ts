export enum DataType {
  'STRING'
}

export interface Attribute {
  name: string
  type: DataType
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

type DataObject = { [key: string]: DataObjectValue }

export type Data = {
  items: DataObject[]
  count: number
}

export interface ExplorerState {
  metadata: Metadata | null | undefined
  data: Data | null | undefined
  toasts: Toast[]
}
