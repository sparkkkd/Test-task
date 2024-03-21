import GoodInfo from '../GoodInfo/GoodInfo'
import GoodSlider from '../GoodSlider/GoodSlider'
import styles from './GoodComponent.module.sass'

export interface GoodComponentProps {}

export default function GoodComponent({}: GoodComponentProps) {
	return (
		<div className={styles.goodComponent}>
			<GoodSlider />
			<GoodInfo />
		</div>
	)
}
