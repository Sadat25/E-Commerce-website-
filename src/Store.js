import { configureStore } from '@reduxjs/toolkit'
import { ProductSlices } from './Slices/ProductSlices'

export const store = configureStore({
    reducer: {
        AllProducts: ProductSlices.reducer
    },
})