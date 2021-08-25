import axios from 'axios'

// WHEN WORKING WITH AN .env FILE
// export const __API__ = process.env.API_URL

const defaultOptions = {
  baseURL: 'baseURL'
}

const instance = axios.create(defaultOptions)

export default instance
