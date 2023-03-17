/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react'
import { Link } from 'react-router-dom'

const commonLinkStyle = css({
  color: '#009688'
})

export interface Props {
  linkTo: string
  linkText: String
  linkCss?: SerializedStyles
}

export const CommonLink: React.FC<Props> = (props: Props) => {
  const { linkTo, linkText, linkCss } = props
  const style = linkCss === undefined ? commonLinkStyle : linkCss
  return (
    <Link to={linkTo} css={style}>
      {linkText}
    </Link>
  )
}
