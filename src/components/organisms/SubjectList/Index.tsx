import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSubjectIndex } from '../../../apis/subject'
import { CommonImage } from '../../atoms/Image/Index'

interface subjectType {
  key: string
  name: string
  image: string
}

export const SubjectList: React.FC = () => {
  const [subjects, setSubjects] = useState<subjectType[]>([{ key: '', name: '', image: '' }])
  // const navigate = useNavigate()

  useEffect(() => {
    void getSubjectIndex().then((data: React.SetStateAction<subjectType[]>) => {
      setSubjects(data)
    })
  }, [])

  // const handleSearchProductBySubject = (subjectKey: string): void => {
  //   navigate(`/search/result/${subjectKey}`)
  // }

  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
      columns={{ xs: 12, sm: 12, md: 12, lg: 10 }}
    >
      {subjects?.map((subject, index) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
          <Link to={`/search/result/${subject.key}`}>
            <CommonImage
              key={index}
              image={subject.image}
              imageMaxWidth={300}
              imageMaxHeight={200}
              imageTitleFilter={true}
              titleText={subject.name}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
