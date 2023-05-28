import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import { ProductType } from '../../../types'
import { CommonButton } from '../../atoms/Button/Index'
import { CommonImage } from '../../atoms/Image/Index'

export interface Props {
  product: ProductType
}

export const ProductCartBox: React.FC<Props> = (props: Props) => {
  const { product } = props
  const defaultImage = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
  const prodcutImage = product.image != null ? product.image : defaultImage
  return (
    <>
      <Card
        sx={{
          width: 300,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingBottom: 2
        }}
      >
        <CommonImage
          image={prodcutImage}
          imageTitleFilter={false}
          imageStyle={{ width: '100%', maxHeight: 200 }}
        />
        <Box sx={{ width: 260, margin: 'auto' }}>
          <Typography variant="h5" color="text.Primary" component="div" sx={{ marginTop: 2 }}>
            ¥{product.sale.price.toLocaleString()}
          </Typography>
          <CommonButton
            variant="contained"
            buttonText="カートに入れる"
            handleFunction={function () {
              throw new Error('Function not implemented.')
            }}
            style={{ width: '100%', marginTop: 2 }}
          />
        </Box>
      </Card>
    </>
  )
}
