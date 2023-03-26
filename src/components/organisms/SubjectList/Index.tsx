import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProductSearchBySubject } from '../../../apis/product'
import { getSubjectIndex } from '../../../apis/subject'
import { SubjectCard } from '../../molecules/SubjectCard/Index'

interface subjectType {
  key: string
  name: string
  image: string
}

export const SubjectList: React.FC = () => {
  const navigate = useNavigate()
  const [subjects, setSubjects] = useState<subjectType[]>([{ key: '', name: '', image: '' }])

  const handleSearchSubject = async (subjectKey: string): Promise<void> => {
    const data = await getProductSearchBySubject(subjectKey)
    navigate('/search/result', {
      state: {
        products: data
      }
    })
  }

  useEffect(() => {
    void getSubjectIndex().then((data: React.SetStateAction<subjectType[]>) => {
      setSubjects(data)
    })
  }, [])

  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
      columns={{ xs: 12, sm: 12, md: 12, lg: 10 }}
    >
      {subjects?.map((subject, index) => (
        <Grid
          key={index}
          item
          xs={6}
          sm={4}
          md={3}
          lg={2}
          onClick={(): void => {
            void handleSearchSubject(subject.key)
          }}
          sx={{ cursor: 'pointer' }}
        >
          <SubjectCard name={subject.name} image={subject.image} />
        </Grid>
      ))}
    </Grid>
  )
}
