import { Meta, Story } from '@storybook/react/types-6-0'
import { ProductDetail, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Organisms/ProductDetail',
  component: ProductDetail
}

const Template: Story<Props> = (args) => <ProductDetail {...args} />

export const Index = Template.bind({})

Index.args = {
  product: {
    id: '56275d09-d68a-43db-a0e1-a08afd4e54ee',
    auther_id: '2a95a614-b501-4962-94d5-7ad8689dc2b5',
    name: '難関私立文系英単語100',
    description: '最難関私立文系を目指すならマストの英単語を収録！',
    image: null,
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
