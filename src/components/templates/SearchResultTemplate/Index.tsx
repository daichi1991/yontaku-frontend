import { productType } from '../../../types'
import { Header } from '../../organisms/Header/Index'
import { ProductSearchResult } from '../../organisms/ProductSearchResult/Index'

export interface Props {
  subjectKey: string | undefined
  products: productType[]
}

export const SearchResultTemplate: React.FC<Props> = (props: Props) => {
  const { products } = props

  return (
    <>
      <Header menuIcon={true} accountIcon={true} />
      <ProductSearchResult products={products} />
    </>
  )
}
