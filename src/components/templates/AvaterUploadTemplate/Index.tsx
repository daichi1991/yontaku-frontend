import { AvaterUpload } from '../../molecules/AvaterUpload/Index'
import { Header } from '../../organisms/Header/Index'

export const AvaterUploadTemplate: React.FC = () => {
  return (
    <>
      <Header menuIcon={true} accountIcon={true} />
      <AvaterUpload />
    </>
  )
}
