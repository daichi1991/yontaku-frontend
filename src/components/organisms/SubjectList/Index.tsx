import { Grid } from '@mui/material'
import { Subject } from '../../atoms/Subject/Index'

interface subjectType {
  image: string
  name: string
}

export interface Props {
  subjects: subjectType[]
}

export const SubjectList: React.FC<Props> = (props: Props) => {
  const { subjects } = props

  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
      columns={{ xs: 12, sm: 12, md: 12, lg: 10 }}
    >
      {subjects?.map((subject, index) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
          <Subject key={index} image={subject.image} name={subject.name} />
        </Grid>
      ))}
    </Grid>
  )
}
