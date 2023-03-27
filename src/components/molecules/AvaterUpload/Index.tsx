import { Button } from '@mui/material'
import * as React from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { postUpdataAvater } from '../../../apis/user'
import { AuthUserContext } from '../../../contexts/authUserContext'

const { useState } = React

export const AvaterUpload: React.FC = () => {
  const [upImg, setUpImg] = useState<string>()
  const [crop, setCrop] = useState<Crop>({ unit: 'px', x: 0, y: 0, width: 300, height: 300 })
  const imgRef = React.useRef<HTMLImageElement>(null)
  const { userToken } = React.useContext(AuthUserContext)

  const createFormData = (): FormData => {
    const formData = new FormData()
    if (upImg != null) formData.append('image', upImg)
    return formData
  }

  const handleCreatePost = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log('aaa')
    event.preventDefault()
    const data = createFormData()

    void postUpdataAvater(data, userToken).then(() => {
      setUpImg('')
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      const imageDataUrl = reader.result as string
      setUpImg(imageDataUrl)
    }
    reader.readAsDataURL(file as Blob)
  }

  // const handleImageLoaded = (image: React.ReactEventHandler<HTMLImageElement>): void => {
  //   if (imgRef.current != null) {
  //     imgRef.current.image = image
  //   }
  // }

  const handleCropComplete = (crop: Crop): void => {
    if (upImg == null) {
      console.error('Image is not selected.')
      return
    }
    if (imgRef.current != null) {
      void getCroppedImg(imgRef.current, crop, 'newFile.jpeg').then((value) => {
        console.log(value)
      })
    }
  }

  const getCroppedImg = async (
    image: HTMLImageElement,
    crop: Crop,
    fileName: string
  ): Promise<string> => {
    const canvas = document.createElement('canvas')
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')
    ctx?.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    )
    return await new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob == null) {
            console.error('Canvas is empty')
            return
          }
          const file = new File([blob], fileName, { type: blob.type })
          resolve(URL.createObjectURL(file))
        },
        'image/jpeg',
        1
      )
    })
  }

  return (
    <div>
      <form onSubmit={handleCreatePost}>
        <div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {upImg != null && (
            <Button type="submit" variant="contained" color="primary">
              アップロード
            </Button>
          )}
        </div>
        {upImg != null && (
          <ReactCrop
            crop={crop}
            onComplete={handleCropComplete}
            onChange={(newCrop: React.SetStateAction<Crop>) => setCrop(newCrop)}
            aspect={1}
            circularCrop={true}
            keepSelection={true}
          >
            <img src={upImg} />
          </ReactCrop>
        )}
      </form>
    </div>
  )
}
