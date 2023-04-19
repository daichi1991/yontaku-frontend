import { Meta, Story } from '@storybook/react/types-6-0'
import { EditAvatarDialog, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Organisms/EditAvatarDialog',
  component: EditAvatarDialog
}

const Template: Story<Props> = (args) => <EditAvatarDialog {...args} />

export const Index = Template.bind({})

const handleCloseAvatarUpload = (): void => {}

Index.args = {
  open: false,
  onClose: handleCloseAvatarUpload
}

export default StoryBook
