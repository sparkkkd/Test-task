import styles from './MenuButton.module.sass'
import MenuIcon from '../../images/menu-icon.svg?react'

export interface MenuButtonProps {}

export default function MenuButton({}: MenuButtonProps) {
	return (
		<button className={styles.menuButton}>
			<MenuIcon />
			<span>Меню</span>
		</button>
	)
}
