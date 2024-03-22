import { createSlice } from '@reduxjs/toolkit'

interface CountState {
	count: number
	isPackage: boolean
	totalPrice: number
}

const initialState: CountState = {
	count: 0,
	isPackage: false,
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			if (state.isPackage) {
				state.count = state.count + 12
				state.totalPrice = action.payload * state.count
			}

			if (!state.isPackage) {
				state.count = state.count + 1
				state.totalPrice = action.payload * state.count
			}
		},
		removeFromCart: (state, action) => {
			if (state.isPackage) {
				state.count = state.count - 12
				state.totalPrice = action.payload * state.count
			}

			if (state.count < 0) {
				state.count = 0
				state.totalPrice = 0
			}

			if (!state.isPackage && state.count >= 0) {
				state.count = state.count - 1
				state.totalPrice = action.payload * state.count
			}
		},
		switchPackage: (state) => {
			state.isPackage = !state.isPackage
		},
	},
})

export default cartSlice.reducer
