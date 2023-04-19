import { useContext, useEffect, useState } from 'react'
import { getProductSearchByCurrentUser } from '../../../apis/product'
import { AuthUserContext } from '../../../contexts/authUserContext'
import { ProductType } from '../../../types'
import { CommonTitle } from '../../atoms/Title/Index'
import { Header } from '../../organisms/Header/Index'
import { ProductsIndex } from '../../organisms/ProductsIndex/Index'

export const DashboardTemplate: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const { userToken } = useContext(AuthUserContext)

  useEffect(() => {
    getProductSearchByCurrentUser(userToken)
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Header menuIcon={false} accountIcon={true} />
      <CommonTitle titleText="教材の管理" />
      <ProductsIndex products={products} />
    </>
  )
}
