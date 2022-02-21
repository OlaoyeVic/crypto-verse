import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeader = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'f65b14640dmsh13bfc849bd604a9p1dd53ajsn7bc85f6a9b4f'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const createRequest = (url: string) => ({url, headers: cryptoNewsHeader})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query:({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})
export const {useGetCryptoNewsQuery} = cryptoNewsApi