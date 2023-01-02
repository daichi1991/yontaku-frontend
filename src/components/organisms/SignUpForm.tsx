import Divider from '@mui/material/Divider'
import { Box } from '@mui/system'
import { styles } from '../../styles/style'
import { MailAuthenticateProps } from '../../types'
import { ContainedButton } from '../atoms/Button/Index'
import { PrimaryLink } from '../atoms/Link/Index'
import { MailAuthenticate } from './MailAuthenticate'

interface Props extends MailAuthenticateProps {
  signinLinkTo: string
  signinLinkText: string
}

export const SignUpForm: React.FC<Props> = (props: Props) => {
  const { buttonText, mailAddress, password, handleFunction, signinLinkTo, signinLinkText } = props
  return (
    <Box css={styles.signInForm}>
      <Box css={styles.commonForm}>
        <Box css={styles.formBoader}>
          <MailAuthenticate mailAddress={mailAddress} password={password} />
          <ContainedButton buttonText={buttonText} handleFunction={handleFunction} />
          <Divider css={styles.divider} />
          <Box css={styles.textAlignCenter}>
            <PrimaryLink linkTo={signinLinkTo} linkText={signinLinkText} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
