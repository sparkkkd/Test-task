import styles from './header.module.sass'
import Logo from '../../images/logo.svg?react'
import MenuButton from '../MenuButton/MenuButton'
import Search from '../Search/Search'

import NotificationIcon from '../../images/notification-icon.svg?react'
import FavoriteIcon from '../../images/fav-icon.svg?react'
import CartComponent from '../CartComponent/CartComponent'
import UserComponent from '../UserComponent/UserComponent'

interface HeaderProps {}

export default function Header({}: HeaderProps) {
	return (
		<header className={styles.header}>
			<a href='/'>
				<Logo />
			</a>
			<MenuButton />
			<Search />
			<div className={styles.notificationsAndFav}>
				<NotificationIcon className='icon' />
				<FavoriteIcon className='icon' />
			</div>
			<CartComponent />
			<UserComponent />
		</header>
	)
}
