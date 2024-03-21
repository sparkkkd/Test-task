import styles from './CartButton.module.sass'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'

import CartIcon from '../../images/cart-icon.svg?react'
import MinusIcon from '../../images/minus-icon.svg?react'
import PlusIcon from '../../images/plus-icon.svg?react'
import { cartSlice } from '../../store/reducers/CartSlice'

export interface CartButtonProps {}

export default function CartButton({}: CartButtonProps) {
	const { count } = useAppSelector((state) => state.cartReducer)
	const dispatch = useAppDispatch()
	console.log(count)

	const { addToCart, removeFromCart } = cartSlice.actions

	function handleButtonClick() {
		if (count === 0) {
			dispatch(addToCart())
		}

		return
	}

	return (
		<button
			className={`${styles.cartButton} ${
				count !== 0 ? styles.activeButton : styles.inactiveButton
			}`}
			onClick={() => handleButtonClick()}
		>
			{count === 0 && <CartIcon className={styles.cartIcon} />}
			{count === 0 && <span>Добавить в корзину</span>}
			{count > 0 && (
				<span>
					<MinusIcon
						onClick={() => dispatch(removeFromCart())}
						className={`${styles.counter} ${styles.minus}`}
					/>
					<span>{count} штуки</span>
					<PlusIcon
						onClick={() => dispatch(addToCart())}
						className={`${styles.counter} ${styles.plus}`}
					/>
				</span>
			)}
		</button>
	)
}
