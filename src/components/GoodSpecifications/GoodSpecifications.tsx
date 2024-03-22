import styles from './GoodSpecifications.module.sass'
import { GOOD_SPECIFICATIONS } from './constant'

export interface GoodSpecificationsProps {}

export default function GoodSpecifications({}: GoodSpecificationsProps) {
	return (
		<div className={styles.goodSpecifications}>
			<div className={styles.mainTitle}>Характеристики</div>
			<div className={styles.specs}>
				{GOOD_SPECIFICATIONS.map(({ value, title, id }) => (
					<div key={id} className={styles.spec}>
						<span className={styles.value}>{value}</span>
						<span className={styles.title}>{title}</span>
					</div>
				))}
			</div>
		</div>
	)
}
