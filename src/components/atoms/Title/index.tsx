import Typography from '@mui/material/Typography'
import { styles } from '../../../styles/style'

export interface Props {
  titleText: string
}

export const CommonTitle: React.FC<Props> = (props: Props) => {
  const { titleText } = props
  return (
    <Typography variant="h6" component="div" css={styles.pageTitle}>
      {titleText}
    </Typography>
  )
}
