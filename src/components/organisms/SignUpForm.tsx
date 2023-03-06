import Divider from '@mui/material/Divider'
import { Box } from '@mui/system'
import { styles } from '../../styles/style'
import { MailAuthenticateProps } from '../../types'
import { CommonButton } from '../atoms/Button/Index'
import { CommonLink } from '../atoms/Link/Index'
import { MailAuthenticate } from './MailAuthenticate'

interface Props extends MailAuthenticateProps {
  signinLinkTo: string
  signinLinkText: string
}

export const SignUpForm: React.FC<Props> = (props: Props) => {
  const { variant, buttonText, email, password, handleFunction, signinLinkTo, signinLinkText } =
    props
  return (
    <Box css={styles.signInForm}>
      <Box css={styles.commonForm}>
        <Box css={styles.formBoader}>
          <MailAuthenticate mailAddress={email} password={password} />
          <CommonButton variant={variant} buttonText={buttonText} handleFunction={handleFunction} />
          <Divider css={styles.divider} />
          <Box css={styles.textAlignCenter}>
            <div>
              <CommonLink linkTo={signinLinkTo} linkText={signinLinkText} />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
