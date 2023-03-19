import { ImageListItem, ImageListItemBar } from '@mui/material'
const sx = {
  height: '100%',
  '& .MuiImageListItemBar-title': { fontSize: 30, lineHeight: 30, textAlign: 'center' }
}

export interface Props {
  image: string
  imageTitleFilter: boolean
  imageStyle: {}
  titleText?: string
}

export const CommonImage: React.FC<Props> = (props: Props) => {
  const { image, imageTitleFilter, titleText, imageStyle } = props

  return (
    <ImageListItem sx={imageStyle}>
      <img src={image} srcSet={image} alt={titleText} loading="lazy" style={imageStyle} />
      {imageTitleFilter && <ImageListItemBar title={titleText} position={'bottom'} sx={sx} />}
    </ImageListItem>
  )
}
