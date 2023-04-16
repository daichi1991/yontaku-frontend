import axios from 'axios'
import { userUrl } from '../utils/urls'

export const putUpdataAvatar = async (data: FormData, userToken: string): Promise<any> => {
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

export const deleteAvatar = async (userToken: string): Promise<any> => {
  const requestUrl = userUrl + '/delete_image.json'
  return await axios
    .request({
      method: 'put',
      url: requestUrl,
      headers: { 'Content-Type': 'image/jpeg', Authorization: `Bearer ${userToken}` },
      withCredentials: true
    })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
      return null
    })
}

export const putUpdateUser = async (
  username: string,
  description: string,
  userToken: string
): Promise<any> => {
  const requestUrl = userUrl + '/update.json'
  return await axios
    .request({
      method: 'put',
      url: requestUrl,
      headers: { Authorization: `Bearer ${userToken}` },
      withCredentials: true,
      data: {
        user: {
          username,
          description
        }
      }
    })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
      return null
    })
}

export const getCurrentUserInfo = async (idToken: string): Promise<any> => {
  const requestUrl = userUrl + '/current_user_information.json'
  return await axios
    .request({
      method: 'get',
      url: requestUrl,
      headers: { Authorization: `Bearer ${idToken}` },
      withCredentials: true
    })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
      return null
    })
}
