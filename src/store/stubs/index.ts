import { DataType, Metadata, Data } from '../explorer/types'

const patientMeta: Metadata = {
  id: 'root_hospital_patient',
  label: 'Patient',
  description: 'Dummy patient data',
  idAttribute: 'id',
  attributes: [{
    name: 'id',
    type: DataType.STRING
  }, {
    name: 'first',
    type: DataType.STRING
  }, {
    name: 'last',
    type: DataType.STRING
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

const patientData: Data = {
  items: [
    { id: 'abc', first: 'piet', last: 'jansen' },
    { id: 'def', first: 'jan', last: 'pietersen' }
  ],
  count: 2
}

export const fetchData = async function (id: string): Promise<Data> {
  if (id === 'root_hospital_patient') {
    return new Promise((resolve) => {
      setTimeout(() => resolve(patientData), 500)
    })
  }
  return Promise.reject(new Error(`${id} not found`))
}
