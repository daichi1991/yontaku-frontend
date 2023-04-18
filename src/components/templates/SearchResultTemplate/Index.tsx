import { ProductType } from '../../../types'
import { Header } from '../../organisms/Header/Index'
import { ProductsIndex } from '../../organisms/ProductsIndex/Index'

export interface Props {
  products: ProductType[]
}

export const SearchResultTemplate: React.FC<Props> = (props: Props) => {
  const { products } = props

  return (
    <>
      <Header menuIcon={true} accountIcon={true} />
      <ProductsIndex products={products} />
    </>
  )
}
