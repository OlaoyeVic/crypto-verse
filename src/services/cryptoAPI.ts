import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoAPIHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'f65b14640dmsh13bfc849bd604a9p1dd53ajsn7bc85f6a9b4f'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url: string) => ({url, headers: cryptoAPIHeaders})

export const cryptoAPI = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder: any) => ({
    getCryptos: builder.query({
      query: (count: any) => createRequest(`/coins?limit=${count}`)
    })
  })
})

export const { useGetCryptosQuery } = cryptoAPI