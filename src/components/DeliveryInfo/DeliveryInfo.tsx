import styles from './DeliveryInfo.module.sass'

export interface DeliveryInfoProps {}

export default function DeliveryInfo({}: DeliveryInfoProps) {
	return (
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
	)
}
