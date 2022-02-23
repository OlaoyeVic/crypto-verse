import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.REACT_APP_API_KEY

const cryptoAPIHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': API_KEY
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url: string) => ({url, headers: cryptoAPIHeaders})

export const cryptoAPI = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder: any) => ({
    getCryptos: builder.query({
      query: (count: number) => createRequest(`/coins?limit=${count}`)
    })
  })
})

export const { useGetCryptosQuery } = cryptoAPI