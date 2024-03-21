import { createSlice } from '@reduxjs/toolkit'

interface CountState {
	count: number
	isPackage: boolean
}

const initialState: CountState = {
	count: 0,
	isPackage: false,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state) => {
			if (state.isPackage) {
				state.count = state.count + 12
			}

			if (!state.isPackage) {
				state.count = state.count + 1
			}
		},
		removeFromCart: (state) => {
			if (state.isPackage) {
				state.count = state.count - 12
			}

			if (state.count < 0) {
				state.count = 0
			}

			if (!state.isPackage && state.count >= 0) {
				state.count = state.count - 1
			}
		},
		switchPackage: (state) => {
			state.isPackage = !state.isPackage
		},
	},
})

export default cartSlice.reducer
