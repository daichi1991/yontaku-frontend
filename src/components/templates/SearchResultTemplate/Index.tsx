import { Header } from '../../organisms/Header/Index'
import { ProductSearchResult } from '../../organisms/ProductSearchResult/Index'

export interface Props {
  subjectKey: string | undefined
  products: productType[]
}

interface productType {
  id: string
  auther_id: string
  name: string
  description: string
  image: string | null
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

export const SearchResultTemplate: React.FC<Props> = (props: Props) => {
  const { products } = props

  return (
    <>
      <Header menuIcon={true} accountIcon={true} />
      <ProductSearchResult products={products} />
    </>
  )
}
