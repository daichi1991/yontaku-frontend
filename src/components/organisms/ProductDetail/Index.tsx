import { css } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { useMediaQueryContext } from '../../../contexts/mediaQueryContext'
import { ProductType } from '../../../types'
import { CommonButton } from '../../atoms/Button/Index'
import { CommonImage } from '../../atoms/Image/Index'
import { RatingResult } from '../../molecules/RatingResult/Index'
import { ProductCartBox } from '../ProductCartBox/Index'

const sideProductCartBox = css({
  position: 'absolute',
  top: 'calc(10%)',
  right: 'calc(50% - 40vw)',
  width: 300
})

export interface Props {
  product: ProductType
}

export const ProductDetail: React.FC<Props> = (props: Props) => {
  const { isPcSite } = useMediaQueryContext()
  const { product } = props
  const defaultImage = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
  const prodcutImage = product.image != null ? product.image : defaultImage

  return (
    <>
      {!isPcSite && (
        <CommonImage
          image={prodcutImage}
          imageTitleFilter={false}
          imageStyle={{ width: '100%', maxHeight: 200 }}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography component="div" variant="h4" sx={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.primary" component="div">
          {product.description}
        </Typography>
        <RatingResult ratingScore={product.rate.score} ratingAmount={product.rate.amount} />
        <Typography variant="subtitle1" color="text.primary" component="div">
          出題数:{product.question_amount}問
        </Typography>
        <Typography variant="subtitle1" color="text.primary" component="div">
          作成者:{product.user.username}
        </Typography>
        {!isPcSite && (
          <CommonButton
            variant="contained"
            buttonText="カートに入れる"
            handleFunction={function () {
              throw new Error('Function not implemented.')
            }}
            style={{ width: '100%', maxWidth: 500, margin: 'auto' }}
          />
        )}
      </Box>
      {isPcSite && (
        <Box css={sideProductCartBox}>
          <ProductCartBox product={product} />
        </Box>
      )}
    </>
  )
}
