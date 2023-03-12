import axios from 'axios'
import { requestHeader, subjectUrl } from '../utils/urls'

export const getSubjectIndex = async (): Promise<any> => {
  return await axios
    .get(subjectUrl, {
      headers: requestHeader
    })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
      return null
    })
}
