import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import CONSTANT from './constant'

export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({
    baseUrl: CONSTANT.HOST_API
  }),
  endpoints: () => ({})
})

export default API
