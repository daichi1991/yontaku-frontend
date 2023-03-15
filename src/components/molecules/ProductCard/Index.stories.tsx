import { Meta, Story } from '@storybook/react/types-6-0'
import { ProductCard, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Molecules/ProductCard',
  component: ProductCard
}

const Template: Story<Props> = (args) => <ProductCard {...args} />

export const Index = Template.bind({})

Index.args = {
  image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  title: '最難関私立文系英単語100問',
  auther: '作者名XYZ',
  ratingValue: 4.5,
  ratingAmount: 30,
  questionAmount: 100,
  price: 1000
}

export default StoryBook
