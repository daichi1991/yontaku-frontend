import { Meta, Story } from '@storybook/react/types-6-0'
import { Props, WelcomDialog } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Organisms/WelcomDialog',
  component: WelcomDialog
}

const Template: Story<Props> = (args) => <WelcomDialog {...args} />

export const Index = Template.bind({})

const handleClose = (): void => {}

Index.args = {
  open: false,
  onClose: handleClose
}

export default StoryBook
