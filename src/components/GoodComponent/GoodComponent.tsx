import GoodInfo from '../GoodInfo/GoodInfo'
import GoodSlider from '../GoodSlider/GoodSlider'
import NavigationLine from '../NavigationLine/NavigationLine'
import styles from './GoodComponent.module.sass'

export interface GoodComponentProps {}

export default function GoodComponent({}: GoodComponentProps) {
	return (
		<>
			<NavigationLine />
			<h1 className={styles.goodTitle}>
				Кроссовки мужские Skechers Sunny Dale
			</h1>
			<div className={styles.goodComponent}>
				<GoodSlider />
				<GoodInfo />
			</div>
		</>
	)
}
