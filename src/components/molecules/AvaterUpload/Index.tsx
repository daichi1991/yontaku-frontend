import { Box } from '@mui/material'
import * as React from 'react'
import { useContext } from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { deleteAvatar, putUpdataAvatar } from '../../../apis/user'
import { AuthUserContext } from '../../../contexts/authUserContext'
import { CommonAvatar } from '../../atoms/Avatar/Index'
import { CommonButton } from '../../atoms/Button/Index'

const { useState } = React

export interface Props {
  setHideCloseButton: React.Dispatch<React.SetStateAction<boolean>>
}

export const AvaterUpload: React.FC<Props> = (props: Props) => {
  const { setHideCloseButton } = props
  const { userToken, userInfo } = useContext(AuthUserContext)
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
  const [editMode, setEditMode] = useState<boolean>(false)
  const [avatarUploadComplete, setAvatarUploadComplete] = useState<boolean>(false)
  const [avatarDeleteConfirm, setAvatarDeleteConfirm] = useState<boolean>(false)
  const [avatarDeleteComplete, setAvatarDeleteComplete] = useState<boolean>(false)

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

    await putUpdataAvatar(data, userToken).then(() => {
      setSrc(null)
      setHideCloseButton(true)
      setAvatarUploadComplete(true)
    })
  }

  const handleDeleteConfirm = (): void => {
    setAvatarDeleteConfirm(true)
  }

  const handleDeleteAvatar = async (): Promise<void> => {
    await deleteAvatar(userToken).then(() => {
      setHideCloseButton(true)
      setAvatarDeleteConfirm(false)
      setAvatarDeleteComplete(true)
    })
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

  const handleEditMode = (): void => {
    setEditMode(!editMode)
  }

  const handleReload = (): void => {
    window.location.reload()
  }

  return (
    <>
      {avatarDeleteConfirm && !avatarUploadComplete && (
        <>
          <Box sx={{ display: 'block' }}>アバターを削除しますか？</Box>
          <Box sx={{ display: 'flex' }}>
            <CommonButton
              variant={'contained'}
              buttonText={'削除'}
              handleFunction={handleDeleteAvatar}
              style={{ minWidth: '120px' }}
            />
            <CommonButton
              variant={'outlined'}
              buttonText={'キャンセル'}
              handleFunction={() => setAvatarDeleteConfirm(false)}
              style={{ minWidth: '120px' }}
            />
          </Box>
        </>
      )}
      {avatarUploadComplete && (
        <>
          <Box sx={{ display: 'block' }}>アップロードが完了しました</Box>
          <CommonButton variant={'contained'} buttonText={'閉じる'} handleFunction={handleReload} />
        </>
      )}
      {avatarDeleteComplete && (
        <>
          <Box sx={{ display: 'block' }}>削除が完了しました</Box>
          <CommonButton variant={'contained'} buttonText={'閉じる'} handleFunction={handleReload} />
        </>
      )}
      {!avatarDeleteConfirm && !avatarUploadComplete && !avatarDeleteComplete && editMode && (
        <>
          <div>
            <input type="file" accept="image/*" onChange={onSelectFile} />
          </div>
          {typeof src === 'string' && (
            <ReactCrop
              crop={crop}
              onChange={onCropChange}
              circularCrop
              onComplete={onCropComplete}
              aspect={1}
            >
              <img src={src} onLoad={onImageLoaded} />
            </ReactCrop>
          )}
          {src != null && (
            <CommonButton
              variant="contained"
              buttonText={'アップロード'}
              handleFunction={handleCreatePut}
            />
          )}
        </>
      )}
      {!avatarDeleteConfirm && !avatarUploadComplete && !avatarDeleteComplete && !editMode && (
        <>
          <CommonAvatar
            avatarImage={userInfo?.image.url}
            avatarAlt={'current user avater'}
            avatarSize={240}
          />
          <Box sx={{ display: 'flex' }}>
            <CommonButton
              variant={'outlined'}
              buttonText={'編集する'}
              handleFunction={handleEditMode}
            />
            {userInfo?.image.url != null && (
              <CommonButton
                variant={'outlined'}
                buttonText={'削除する'}
                handleFunction={handleDeleteConfirm}
              />
            )}
          </Box>
        </>
      )}
    </>
  )
}
