import { configureStore } from '@reduxjs/toolkit'
import { cryptoAPI } from '../services/cryptoAPI'

export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath]: cryptoAPI.reducer
    }
})