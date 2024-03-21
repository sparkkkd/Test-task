import styles from './Navigation.module.sass'

import { NavigationLinks, NavigationSocialLinks } from './constant'

export interface NavigationProps {}

export default function Navigation({}: NavigationProps) {
	return (
		<div className={styles.navigation}>
			<nav>
				<ul className={styles.navlist}>
					{NavigationLinks.map(({ name, href }) => (
						<li className={styles.navlink} key={name}>
							<a href={href}>{name}</a>
						</li>
					))}
				</ul>
			</nav>
			<nav>
				<ul className={`${styles.navlist} ${styles.navlistblue}`}>
					{NavigationSocialLinks.map(({ name, href, icon, isBackground }) => (
						<li
							className={`${styles.navlink} ${
								isBackground && styles.navlinkbg
							}`}
							key={name}
						>
							{icon}
							<a href={href}>{name}</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
