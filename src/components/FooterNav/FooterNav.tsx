import { IFooterNav } from '../../Models/IFooterNav'
import styles from './FooterNav.module.sass'

import {
	FOOTER_NAV_FORWOMEN,
	FOOTER_NAV_FORMEN,
	FOOTER_NAV_FORCHILDREN,
	FOOTER_NAV_FORSPORT,
} from './constant'

export interface FooterNavProps {}

const ALL_CATS: Array<IFooterNav> = [
	{ ...FOOTER_NAV_FORMEN },
	{ ...FOOTER_NAV_FORWOMEN },
	{ ...FOOTER_NAV_FORCHILDREN },
	{ ...FOOTER_NAV_FORSPORT },
]

export default function FooterNav({}: FooterNavProps) {
	return (
		<nav className={styles.footerNav}>
			<ul className={styles.nav}>
				{ALL_CATS.map((item) => (
					<li key={item.id} className={styles.navItem}>
						<div className={styles.title}>{item.title}</div>
						{item.links.map((item) => (
							<a className={styles.navLink} key={item.id} href={item.href}>
								{item.name}
							</a>
						))}
					</li>
				))}
			</ul>
		</nav>
	)
}
