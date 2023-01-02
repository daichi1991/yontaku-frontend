/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom'
import { styles } from '../../../styles/style'

interface HeaderLinkProps {
  linkTo: string
  linkText: String
}

export const HeaderLink: React.FC<HeaderLinkProps> = (props: HeaderLinkProps) => {
  const { linkTo, linkText } = props
  return (
    <Link to={linkTo} css={styles.headerLink}>
      {linkText}
    </Link>
  )
}

interface PrimaryLinkProps {
  linkTo: string
  linkText: String
}

export const PrimaryLink: React.FC<PrimaryLinkProps> = (props: PrimaryLinkProps) => {
  const { linkTo, linkText } = props
  return (
    <Link to={linkTo} css={styles.primaryLink}>
      {linkText}
    </Link>
  )
}
