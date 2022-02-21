import { configureStore } from '@reduxjs/toolkit'
import { cryptoAPI } from '../services/cryptoAPI'
import { cryptoNewsApi } from '../services/cryptoNewsApi'

export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath]: cryptoAPI.reducer,
        [cryptoAPI.reducerPath]: cryptoNewsApi.reducer
    }
})