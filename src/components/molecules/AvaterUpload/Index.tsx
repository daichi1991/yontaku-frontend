import { Button } from '@mui/material'
import * as React from 'react'
import { useContext } from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { putUpdataAvater } from '../../../apis/user'
import { AuthUserContext } from '../../../contexts/authUserContext'

const { useState } = React

export const AvaterUpload: React.FC = () => {
  const { userToken } = useContext(AuthUserContext)
  const [src, setSrc] = useState<FileReader['result']>(null)
  const [image, setImage] = useState<File | null>(null)
  const [crop, setCrop] = useState<Crop>({
    unit: 'px',
    x: 0,
    y: 0,
    width: 200,
    height: 200
  })
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null)

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files != null && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setSrc(reader.result)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const onImageLoaded = (event: React.ChangeEvent<HTMLImageElement>): void => {
    setImageRef(event.target)
  }

  const onCropChange = (crop: Crop): void => {
    setCrop(crop)
  }

  const onCropComplete = (crop: Crop): void => {
    if (imageRef != null && crop.width != null && crop.height != null) {
      const canvas = document.createElement('canvas')
      const scaleX = imageRef.naturalWidth / imageRef.width
      const scaleY = imageRef.naturalHeight / imageRef.height
      canvas.width = crop.width
      canvas.height = crop.height
      const ctx = canvas.getContext('2d')
      if (ctx !== null) {
        ctx.drawImage(
          imageRef,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        )
      }
      const contentType = imageRef.src.split(';')[0].split(':')[1]
      const trimmedSrc = canvas.toDataURL(contentType)
      const uploadImage = dataURIConverter(trimmedSrc)
      setImage(uploadImage)
    }
  }

  const createFormData = (): FormData => {
    const formData = new FormData()
    if (src != null && image != null) formData.append('user[image]', image)
    return formData
  }

  const handleCreatePut = async (): Promise<void> => {
    const data = createFormData()

    await putUpdataAvater(data, userToken)
    setSrc(null)
  }

  const dataURIConverter = (dataURI: string): File => {
    const byteString = atob(dataURI.split(',')[1])
    const mimeType = dataURI.split(',')[0].split(':')[1].split(';')[0]
    const buffer = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++) {
      buffer[i] = byteString.charCodeAt(i)
    }
    return new File([buffer], 'avater.jpg', { type: mimeType })
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          void handleCreatePut()
        }}
      >
        <div>
          <input type="file" accept="image/*" onChange={onSelectFile} />
          {src != null && (
            <Button type="submit" variant="contained" color="primary">
              アップロード
            </Button>
          )}
        </div>
        {typeof src === 'string' && (
          <ReactCrop crop={crop} onChange={onCropChange} circularCrop onComplete={onCropComplete}>
            <img src={src} onLoad={onImageLoaded} />
          </ReactCrop>
        )}
      </form>
    </>
  )
}
