import styles from './NavigationLine.module.sass'

export interface NavigationLineProps {}

export default function NavigationLine({}: NavigationLineProps) {
	return (
		<div className={styles.navigationLine}>
			<span>Каталог / Обувь / Кроссовки / Беговые</span>
		</div>
	)
}
