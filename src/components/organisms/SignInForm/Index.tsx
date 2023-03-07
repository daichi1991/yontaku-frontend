import { css } from '@emotion/react'
import Divider from '@mui/material/Divider'
import { Box } from '@mui/system'
import { MailAuthenticateProps } from '../../../types'
import { CommonButton } from '../../atoms/Button/Index'
import { CommonLink } from '../../atoms/Link/Index'
import { MailAuthenticate } from '../MailAuthenticate/Index'

const linkStyle = css({
  color: '#009688'
})

const signInForm = css({
  display: 'flex',
  justifyContent: 'center',
  padding: '0px 10px'
})

const commonForm = css({
  width: '100%',
  minWidth: '240px',
  maxWidth: '400px',
  margin: '0 auto'
})

const formBoader = css({
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '30px 20px'
})

const divider = css({
  marginTop: '40px',
  marginBottom: '20px',
  marginLeft: '-20px',
  marginRight: '-20px'
})

const textAlignCenter = css({
  textAlign: 'center'
})

export interface Props extends MailAuthenticateProps {
  signupLinkTo: string
  signupLinkText: string
}

export const SignInForm: React.FC<Props> = (props: Props) => {
  const { variant, buttonText, email, password, handleFunction, signupLinkTo, signupLinkText } =
    props
  return (
    <Box css={signInForm}>
      <Box css={commonForm}>
        <Box css={formBoader}>
          <MailAuthenticate mailAddress={email} password={password} />
          <CommonButton variant={variant} buttonText={buttonText} handleFunction={handleFunction} />
          <Divider css={divider} />
          <Box css={textAlignCenter}>
            <div>
              <CommonLink linkTo={signupLinkTo} linkText={signupLinkText} linkCss={linkStyle} />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
