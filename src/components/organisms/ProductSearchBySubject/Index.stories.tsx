import { Meta, Story } from '@storybook/react/types-6-0'
import { ProductSearchBySubject, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Organisms/ProductSearchBySubject',
  component: ProductSearchBySubject
}

const Template: Story<Props> = (args) => <ProductSearchBySubject {...args} />

export const Index = Template.bind({})

Index.args = {
  subjectKey: 'english'
}

export default StoryBook
