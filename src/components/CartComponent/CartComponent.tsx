import styles from './CartComponent.module.sass'

import CartIcon from '../../images/cart-icon.svg?react'

export interface CartComponentProps {}

export default function CartComponent({}: CartComponentProps) {
	return (
		<div className={styles.cartComponent}>
			<CartIcon style={{ marginRight: 12 }} />
			<span>123 000 ₽</span>
		</div>
	)
}
