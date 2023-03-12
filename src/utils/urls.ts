// const mode = process.env.REACT_APP_MODE

const HOST = 'http://localhost:3000'

const DEFAULT_URL = `${HOST}/api/v1`

export const requestHeader = {
  'Content-Type': 'application/json'
}

export const subjectUrl = `${DEFAULT_URL}/subjects.json`
