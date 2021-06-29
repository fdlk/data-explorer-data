import { DataType, Metadata, Data, DataObject, Sort } from '../explorer/types'
import randomName from 'random-name'

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

interface Patient extends DataObject {
  id: string
  first: string
  last: string
}

const generatePatients = (count: number): Patient[] => {
  const items: Patient[] = []
  for (let i = 0; i < count; i++) {
    items.push({ id: `${i}`, first: randomName.first(), last: randomName.last() })
  }
  return items
}

const patients = generatePatients(54)

const compare = (a: Patient, b: Patient, sort: Sort): number => {
  let result = 0
  if (sort.sortColumnName === 'first') {
    result = a.first.localeCompare(b.first)
  }
  if (sort.sortColumnName === 'last') {
    result = a.last.localeCompare(b.last)
  }
  if (sort.isSortOrderReversed) {
    result = -result
  }
  return result
}

const patientData = (count: number, page: number, size: number, sort: Sort | null) : Data => {
  if (sort) {
    patients.sort((a, b) => compare(a, b, sort))
  }
  return {
    items: patients.slice((page - 1) * size, page * size),
    count
  }
}

export const fetchData = async function (id: string, page: number, size: number, sort: Sort): Promise<Data> {
  if (id === 'root_hospital_patient') {
    return new Promise((resolve) => {
      setTimeout(() => resolve(patientData(54, page, size, sort)), 500)
    })
  }
  return Promise.reject(new Error(`${id} not found`))
}
