import CartButton from '../CartButton/CartButton'
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo'
import Divider from '../Divider/Divider'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import GoodDescribe from '../GoodDescribe/GoodDescribe'
import GoodPackageOrder from '../GoodPackageOrder/GoodPackageOrder'
import GoodSpecifications from '../GoodSpecifications/GoodSpecifications'
import styles from './GoodInfo.module.sass'

export interface GoodInfoProps {}

export default function GoodInfo({}: GoodInfoProps) {
	const price: number = 122566

	return (
		<div>
			<div className={styles.container}>
				<div className={styles.goodOrder}>
					<span className={styles.sale}>166 534.00 цена без скидки</span>
					<span className={styles.price}>
						122 566 ₽ <span>-15%</span>
					</span>
					<GoodPackageOrder />
					<Divider />
					<DeliveryInfo />
					<div className={styles.cartButtonWrapper}>
						<CartButton price={price} />
						<FavoriteButton />
					</div>
				</div>
				<GoodSpecifications />
			</div>
			<GoodDescribe />
		</div>
	)
}
