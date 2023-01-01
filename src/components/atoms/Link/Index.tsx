import { Link } from 'react-router-dom'

interface Props {
  linkTo: string
  linkText: String
}

export const HeaderLink: React.FC<Props> = (props: Props) => {
  return <Link to={props.linkTo}>{props.linkText}</Link>
}
