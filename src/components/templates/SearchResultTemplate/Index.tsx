import { Header } from '../../organisms/Header/Index'
import { ProductSearchBySubject } from '../../organisms/ProductSearchBySubject/Index'

export interface Props {
  subjectKey: string | undefined
}

export const SearchResultTemplate: React.FC<Props> = (props: Props) => {
  const { subjectKey } = props

  return (
    <>
      <Header menuIcon={true} accountIcon={true} />
      <ProductSearchBySubject subjectKey={subjectKey} />
    </>
  )
}
