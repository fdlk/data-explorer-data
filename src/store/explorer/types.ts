export enum DataType {
  'STRING'
}

export interface Attribute {
  name: string
  type: DataType
}

export interface Metadata {
  id: string,
  label: string,
  description: string | null,
  attributes: Attribute[]
}

export interface Toast {
  message: string
}

export interface ExplorerState {
  metadata: Metadata | null | undefined
  toast: Toast | null
}
