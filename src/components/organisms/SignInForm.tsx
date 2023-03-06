import { css } from '@emotion/react'
import Divider from '@mui/material/Divider'
import { Box } from '@mui/system'
import { styles } from '../../styles/style'
import { MailAuthenticateProps } from '../../types'
import { CommonButton } from '../atoms/Button/Index'
import { CommonLink } from '../atoms/Link/Index'
import { MailAuthenticate } from './MailAuthenticate'

const linkStyle = css({
  color: '#009688'
})

interface Props extends MailAuthenticateProps {
  signupLinkTo: string
  signupLinkText: string
}

export const SignInForm: React.FC<Props> = (props: Props) => {
  const { variant, buttonText, email, password, handleFunction, signupLinkTo, signupLinkText } =
    props
  return (
    <Box css={styles.signInForm}>
      <Box css={styles.commonForm}>
        <Box css={styles.formBoader}>
          <MailAuthenticate mailAddress={email} password={password} />
          <CommonButton variant={variant} buttonText={buttonText} handleFunction={handleFunction} />
          <Divider css={styles.divider} />
          <Box css={styles.textAlignCenter}>
            <div css={linkStyle}>
              <CommonLink linkTo={signupLinkTo} linkText={signupLinkText} />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
