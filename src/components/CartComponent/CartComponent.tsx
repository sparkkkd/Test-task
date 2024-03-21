import styles from './CartComponent.module.sass'

import CartIcon from '../../images/cart-Icon.svg?react'

export interface CartComponentProps {}

export default function CartComponent({}: CartComponentProps) {
	return (
		<div className={styles.cartComponent}>
			<CartIcon />
			<span>123 000 ₽</span>
		</div>
	)
}
