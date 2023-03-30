import axios from 'axios'
import { userUrl } from '../utils/urls'

export const putUpdataAvater = async (data: FormData, userToken: string): Promise<any> => {
  const requestUrl = userUrl + '/update.json'
  return await axios
    .request({
      method: 'put',
      url: requestUrl,
      headers: { 'Content-Type': 'image/jpeg', Authorization: `Bearer ${userToken}` },
      withCredentials: true,
      data
    })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
      return null
    })
}
