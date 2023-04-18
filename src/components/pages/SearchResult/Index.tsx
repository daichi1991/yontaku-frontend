import { useLocation } from 'react-router-dom'
import { SearchResultTemplate } from '../../templates/SearchResultTemplate/Index'

export const SearchResult: React.FC = () => {
  const location = useLocation()
  const products = location.state?.products ?? []
  return <SearchResultTemplate products={products} />
}
