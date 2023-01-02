import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { styles } from '../../../styles/style'

export const MainTitle: React.FC = () => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <Link to="/" css={styles.headerLink}>
        ヨンタク！
      </Link>
    </Typography>
  )
}

interface PageTitleProps {
  pageTitleText: string
}

export const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {
  return (
    <Typography variant="h6" component="div" css={styles.pageTitle}>
      {props.pageTitleText}
    </Typography>
  )
}
