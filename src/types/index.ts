import { ReactElement } from 'react'
import { Crop, PixelCrop } from 'react-image-crop'

export interface AvatarProps {
  avatarImage: string | undefined
  avatarAlt: string
  avatarSize: number
}

export interface TextInputProps {
  placeholder?: string
  inputType: string
  inputName: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: string
  textRows?: number
}

export interface TextFieldProps extends TextInputProps {
  labelText?: string
}

export interface HeaderType {
  menuIcon: boolean
  accountIcon: boolean
}

export interface DialogProps {
  open: boolean
  onClose: () => void
  dialogTitle: string | null
  dialogContent?: ReactElement
  dialogAction?: ReactElement
}

export interface MailAuthenticateProps {
  variant: string
  buttonText: string
  email: TextFieldProps
  password: TextFieldProps
  handleFunction: () => void
}

export interface AuthUser {
  token: string
}

export interface UserType {
  id: string
  username: string
  description: string
  image: {
    url: string
  }
  active: boolean
}

export interface productType {
  id: string
  name: string
  description: string
  image: string | null
  user: {
    id: string
    username: string
  }
  sale: {
    price: number
    publish: boolean
  }
  rate: {
    amount: number
    score: number | null
  }
  question_amount: number
}

export interface ReactCropProps {
  src: string
  crop?: Crop
  onImageLoaded?: (image: HTMLImageElement) => void
  onComplete?: (crop: Crop, pixelCrop: PixelCrop) => void
  onChange?: (crop: Crop, pixelCrop: PixelCrop) => void
  onDragStart?: () => void
  onDragEnd?: () => void
  crossorigin?: HTMLImageElement['crossOrigin']
  crossoriginUseCredentials?: HTMLImageElement['crossOrigin']
  imageAlt?: string
  imageStyle?: React.CSSProperties
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  locked?: boolean
  renderSelectionAddon?: (state: Selection) => JSX.Element | null
  ruleOfThirds?: boolean
  circularCrop?: boolean
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  keepSelection?: boolean
  cropShape?: 'rect' | 'round'
  showGrid?: boolean
  zoomWithScroll?: boolean
  zoomSpeed?: number
  onZoomChange?: (zoom: number) => void
  onAspectRatioChange?: (crop: Crop, pixelCrop: PixelCrop) => void
  circularCropRadius?: number
  styleWithZoom?: boolean
  zoomCropPadding?: number
}
