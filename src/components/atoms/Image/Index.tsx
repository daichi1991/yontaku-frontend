import { ImageListItem, ImageListItemBar } from '@mui/material'
const sx = {
  height: '100%',
  '& .MuiImageListItemBar-title': { fontSize: 30, lineHeight: 30, textAlign: 'center' }
}

export interface Props {
  image: string
  imageMaxWidth: number
  imageMaxHeight: number
  imageTitleFilter: boolean
  titleText?: string
}

export const CommonImage: React.FC<Props> = (props: Props) => {
  const { image, imageMaxWidth, imageMaxHeight, imageTitleFilter, titleText } = props

  return (
    <ImageListItem sx={{ maxWidth: imageMaxWidth, maxHeight: imageMaxHeight }}>
      <img
        src={image}
        srcSet={image}
        alt={titleText}
        loading="lazy"
        style={{ maxWidth: imageMaxWidth, maxHeight: imageMaxHeight }}
      />
      {imageTitleFilter && <ImageListItemBar title={titleText} position={'bottom'} sx={sx} />}
    </ImageListItem>
  )
}
