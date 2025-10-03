import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const ProductSlices = createSlice({
    name: 'value',
    initialState,
    reducers: {
        ProductReducer: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { ProductReducer } = ProductSlices.actions
export default ProductSlices.reducer