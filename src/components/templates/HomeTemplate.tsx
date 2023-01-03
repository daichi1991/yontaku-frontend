import { useState } from 'react'
import { ContainedButton } from '../atoms/Button/Index'
import { Header } from '../organisms/Header'
import { WelcomDialog } from '../organisms/WelcomeDialog'

export const HomeTemplate: React.FC = () => {
  const [open, setOpen] = useState(false)
  const handleDialogOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }
  return (
    <>
      <Header menuIcon={true} accountIcon={true} />
      <ContainedButton buttonText="ダイアログ" handleFunction={handleDialogOpen} />
      <WelcomDialog open={open} onClose={handleClose} />
    </>
  )
}
