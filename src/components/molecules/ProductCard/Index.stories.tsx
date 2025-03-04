import { Meta, Story } from '@storybook/react/types-6-0'
import { ProductCard, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Molecules/ProductCard',
  component: ProductCard
}

const Template: Story<Props> = (args) => <ProductCard {...args} />

export const Index = Template.bind({})

Index.args = {
  product: {
    id: '56275d09-d68a-43db-a0e1-a08afd4e54ee',
    name: '難関私立文系英単語100',
    description: '最難関私立文系を目指すならマストの英単語を収録！',
    image: null,
    user: {
      id: '2a95a614-b501-4962-94d5-7ad8689dc2b5',
      username: 'テストユーザー'
    },
    sale: {
      price: 3000.0,
      publish: true
    },
    rate: {
      amount: 0,
      score: null
    },
    question_amount: 12
  }
}

export default StoryBook
