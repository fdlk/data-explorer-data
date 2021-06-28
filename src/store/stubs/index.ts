import { DataType, Metadata } from '../explorer/types'

const patientMeta: Metadata = {
  id: 'root_hospital_patient',
  label: 'Patient',
  description: 'Dummy patient data',
  attributes: [{
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
