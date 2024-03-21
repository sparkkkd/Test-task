import { createSlice } from '@reduxjs/toolkit'

interface CountState {
	count: number
}

const initialState = {
	count: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state = state + action.payload
		},
	},
})

export default cartSlice.reducer
