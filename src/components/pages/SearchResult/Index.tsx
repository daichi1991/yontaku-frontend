import { useLocation, useParams } from 'react-router-dom'
import { SearchResultTemplate } from '../../templates/SearchResultTemplate/Index'

export const SearchResult: React.FC = () => {
  const location = useLocation()
  const products = location.state?.products ?? []
  const subjectKey = useParams().param
  return <SearchResultTemplate subjectKey={subjectKey} products={products} />
}
