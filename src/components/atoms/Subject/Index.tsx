import { ImageListItem, ImageListItemBar } from '@mui/material'
const sx = {
  height: '100%',
  '& .MuiImageListItemBar-titleWrap': { padding: '24px 16px' },
  '& .MuiImageListItemBar-title': { fontSize: 30, lineHeight: 30, textAlign: 'center' }
}

export interface Props {
  image: string
  name: string
}

export const Subject: React.FC<Props> = (props: Props) => {
  const { image, name } = props

  return (
    <ImageListItem sx={{ maxWidth: 300 }}>
      <img src={image} srcSet={image} alt={name} loading="lazy" />
      <ImageListItemBar title={name} position={'bottom'} sx={sx} />
    </ImageListItem>
  )
}
