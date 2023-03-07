import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../../organisms/Header/Index'
import { WelcomDialog } from '../../organisms/WelcomeDialog/Index'

export const HomeTemplate: React.FC = () => {
  const location = useLocation()
  const [open, setOpen] = useState(location.state != null && location.state.dialog === 'yes')

  const handleClose = (): void => {
    setOpen(false)
  }
  return (
    <>
      <Header menuIcon={true} accountIcon={true} />
      <WelcomDialog open={open} onClose={handleClose} />
    </>
  )
}
