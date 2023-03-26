import { useLocation } from 'react-router-dom'
import { ProductTemplate } from '../../templates/ProductTemplate/Index'

export const Product: React.FC = () => {
  const location = useLocation()
  const product = location.state?.product ?? []
  console.log(product)
  return <ProductTemplate product={product} />
}
