import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { cartSlice } from '../../store/reducers/CartSlice'
import CartButton from '../CartButton/CartButton'
import Divider from '../Divider/Divider'
import styles from './GoodInfo.module.sass'
import Switch from '@mui/material/Switch'

export interface GoodInfoProps {}

const label = { inputProps: { 'aria-label': 'Switch demo' } }

export default function GoodInfo({}: GoodInfoProps) {
	const dispatch = useAppDispatch()
	const { switchPackage } = cartSlice.actions

	const { isPackage } = useAppSelector((state) => state.cartReducer)

	console.log(isPackage)

	return (
		<div className={styles.goodInfo}>
			<span className={styles.sale}>166 534.00 цена без скидки</span>
			<span className={styles.price}>
				122 566 ₽ <span>-15%</span>
			</span>
			<div className={styles.package}>
				<span className={styles.packageCount}>12 штук в уп.</span>
				<Switch
					onChange={() => dispatch(switchPackage())}
					className={styles.switch}
					{...label}
				/>
				<span>Заказ упаковкой</span>
			</div>
			<Divider />
			<div className={styles.deliveryInfo}>
				<div>
					<span>Завтра</span>
					Доставка
				</div>
				<div>
					<span>7 шт.</span>
					Тарасовка
				</div>
				<div>
					<span>7 шт.</span>
					Тарасовка
				</div>
			</div>
			<div className={styles.cartButtonWrapper}>
				<CartButton />
			</div>
		</div>
	)
}
