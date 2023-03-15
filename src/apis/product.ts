import axios from 'axios'
import { productUrl, requestHeader } from '../utils/urls'

export const getProductSearchBySubject = async (subjectKey: string): Promise<any> => {
  const param = `?subject=${subjectKey}`
  return await axios
    .get(productUrl + param + '.json', {
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
