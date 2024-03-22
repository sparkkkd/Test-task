import styles from './GoodPackageOrder.module.sass'

import Switch from '@mui/material/Switch'

import { useAppDispatch } from '../../hooks/redux'
import { cartSlice } from '../../store/reducers/CartSlice'

export interface GoodPackageOrderProps {}

export default function GoodPackageOrder({}: GoodPackageOrderProps) {
	const dispatch = useAppDispatch()
	const { switchPackage } = cartSlice.actions

	return (
		<div className={styles.package}>
			<span className={styles.packageCount}>12 штук в уп.</span>
			<Switch
				onChange={() => dispatch(switchPackage())}
				className={styles.switch}
			/>
			<span>Заказ упаковкой</span>
		</div>
	)
}
