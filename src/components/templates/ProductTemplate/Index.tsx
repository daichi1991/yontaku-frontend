import { ProductType } from '../../../types'
import { Header } from '../../organisms/Header/Index'
import { ProductDetail } from '../../organisms/ProductDetail/Index'

export interface Props {
  product: ProductType
}

export const ProductTemplate: React.FC<Props> = (props: Props) => {
  const { product } = props

  return (
    <>
      <Header menuIcon={true} accountIcon={true} />
      <ProductDetail product={product} />
    </>
  )
}
