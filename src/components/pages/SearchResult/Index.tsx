import { useParams } from 'react-router-dom'
import { SearchResultTemplate } from '../../templates/SearchResultTemplate/Index'

export const SearchResult: React.FC = () => {
  const subjectKey = useParams().param
  return <SearchResultTemplate subjectKey={subjectKey} />
}
