import { DataType, Metadata, Data, DataObject } from '../explorer/types'

const patientMeta: Metadata = {
  id: 'root_hospital_patient',
  label: 'Patient',
  description: 'Dummy patient data',
  idAttribute: 'id',
  attributes: [{
    name: 'id',
    type: DataType.STRING,
    visible: false
  }, {
    name: 'first',
    type: DataType.STRING,
    visible: true
  }, {
    name: 'last',
    type: DataType.STRING,
    visible: true
  }]
}

export const fetchMetadata = async function (id: string): Promise<Metadata> {
  if (id === 'root_hospital_patient') {
    return new Promise((resolve) => {
      setTimeout(() => resolve(patientMeta), 500)
    })
  }
  return Promise.reject(new Error(`${id} not found`))
}

const patientData = (count: number, page: number, size: number) : Data => {
  const items: DataObject[] = []
  for (let i = (page - 1) * size; i < page * size && i < count; i++) {
    items.push({ id: `pat${i}`, first: `first${i}`, last: `last${i}` })
  }
  return {
    items,
    count
  }
}

export const fetchData = async function (id: string, page: number, size: number): Promise<Data> {
  if (id === 'root_hospital_patient') {
    return new Promise((resolve) => {
      setTimeout(() => resolve(patientData(54, page, size)), 500)
    })
  }
  return Promise.reject(new Error(`${id} not found`))
}
