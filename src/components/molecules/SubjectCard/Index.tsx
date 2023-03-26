import { CommonImage } from '../../atoms/Image/Index'

export interface Props {
  name: string
  image: string
}

export const SubjectCard: React.FC<Props> = (props: Props) => {
  const { name, image } = props

  return (
    <CommonImage
      image={image}
      imageStyle={{ maxWidth: 300, maxHeight: 200 }}
      imageTitleFilter={true}
      titleText={name}
      imageBarStyle={{ textAlign: 'center', height: '100%' }}
    />
  )
}
