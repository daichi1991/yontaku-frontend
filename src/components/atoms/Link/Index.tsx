/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@mui/styled-engine'
import { Link } from 'react-router-dom'
import { styles } from '../../../styles/style'

interface HeaderLinkProps {
  linkTo: string
  linkText: String
}

export const HeaderLink: React.FC<HeaderLinkProps> = (props: HeaderLinkProps) => {
  return (
    <Link to={props.linkTo} css={styles.headerLink}>
      {props.linkText}
    </Link>
  )
}

interface PrimaryLinkProps {
  linkTo: string
  linkText: String
  additionalCss?: SerializedStyles
}

export const PrimaryLink: React.FC<PrimaryLinkProps> = (props: PrimaryLinkProps) => {
  return (
    <Link to={props.linkTo} css={styles.primaryLink}>
      {props.linkText}
    </Link>
  )
}
