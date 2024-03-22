import styles from './CartComponent.module.sass'

import CartIcon from '../../images/cart-icon.svg?react'
import { useAppSelector } from '../../hooks/redux'

export interface CartComponentProps {}

export default function CartComponent({}: CartComponentProps) {
	const { totalPrice } = useAppSelector((state) => state.cartReducer)

	return (
		<div className={styles.cartComponent}>
			<CartIcon style={{ marginRight: 12 }} />
			<span>
				{new Intl.NumberFormat('Ru-ru', {
					style: 'currency',
					currency: 'RUB',
				}).format(totalPrice)}{' '}
			</span>
		</div>
	)
}
