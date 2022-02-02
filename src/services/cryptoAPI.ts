import { configureStore } from '@reduxjs/toolkit'
import { createAPI, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoAPIHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'f65b14640dmsh13bfc849bd604a9p1dd53ajsn7bc85f6a9b4f'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url: any) => ({url, headers: cryptoAPIHeaders})

export const cryptoAPI = createAPI({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder: any) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
})

export default configureStore ({
  reducer: {}
})
const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'f65b14640dmsh13bfc849bd604a9p1dd53ajsn7bc85f6a9b4f'
    }
  }