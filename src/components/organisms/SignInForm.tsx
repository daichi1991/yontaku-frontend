import Divider from '@mui/material/Divider'
import { Box } from '@mui/system'
import { styles } from '../../styles/style'
import { TextField } from '../../types'
import { ContainedButton } from '../atoms/Button/Index'
import { PrimaryLink } from '../atoms/Link/Index'
import { MailAuthenticate } from './MailAuthenticate'

interface Props {
  buttonText: string
  mailAddress: TextField
  password: TextField
  signupLinkTo: string
  signupLinkText: string
  handleFunction: () => {}
}

export const SignInForm: React.FC<Props> = (props: Props) => {
  return (
    <Box css={styles.signInForm}>
      <Box css={styles.commonForm}>
        <Box css={styles.formBoader}>
          <MailAuthenticate mailAddress={props.mailAddress} password={props.password} />
          <ContainedButton buttonText={props.buttonText} handleFunction={props.handleFunction} />
          <Divider css={styles.divider} />
          <Box css={styles.textAlignCenter}>
            <PrimaryLink linkTo={props.signupLinkTo} linkText={props.signupLinkText} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
