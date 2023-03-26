import axios from 'axios'
import { productUrl, requestHeader } from '../utils/urls'

export const getProductSearchBySubject = async (subjectKey: string | undefined): Promise<any> => {
  if (subjectKey === undefined) {
    return
  }
  return await axios
    .get(productUrl + '/search_by_subject.json?subject=' + subjectKey, {
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

export const getProductSearchByKeyword = async (keyword: string | undefined): Promise<any> => {
  if (keyword === undefined) {
    return
  }
  return await axios
    .get(productUrl + '/search.json?q=' + keyword, {
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
