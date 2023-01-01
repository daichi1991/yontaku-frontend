/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom'
import { styles } from '../../../styles/style'

interface Props {
  linkTo: string
  linkText: String
}

export const HeaderLink: React.FC<Props> = (props: Props) => {
  return (
    <Link to={props.linkTo} css={styles.headerLink}>
      {props.linkText}
    </Link>
  )
}
