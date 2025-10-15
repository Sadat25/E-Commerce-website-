import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
    cart: [],
    hart:[]
}

export const ProductSlices = createSlice({
    name: 'value',
    initialState,
    reducers: {
        ProductReducer: (state, action) => {
            state.value = action.payload
        },
        FilterReducer: (state, action) => {
            state.value = action.payload
        },
        CartReducer: (state, action) => {
            state.cart = [...state.cart, action.payload]
        },
        //state.value

        // CartReducer: (state, action) => {
        //     const existing = state.cart.find(item => item.id === action.payload.id);
        //     if (!existing) {
        //         state.cart.push(action.payload);
        //     }
        // }
        HartReducer: (state, action) => {
            state.hart = [...state.hart, action.payload]
        },

    },
})

export const { ProductReducer, FilterReducer, CartReducer, HartReducer } = ProductSlices.actions
export default ProductSlices.reducer