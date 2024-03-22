import styles from './Contacts.module.sass'

import LogoIcon from '../../images/logo.svg?react'
import { CONTACTS_NAV_ITEMS } from './constant'

export interface ContactsProps {}

export default function Contacts({}: ContactsProps) {
	return (
		<div className={styles.contacts}>
			<LogoIcon className={styles.logo} />
			<div className={styles.contactsItems}>
				<div className={styles.itemWrapper}>
					<a href='tel:+78008419595'>8 800 841-95-95</a>
					<span>Служба поддержки</span>
				</div>
				<div className={styles.itemWrapper}>
					<a href='mailto:support@sport.ru'>support@sport.ru</a>
					<span>Служба поддержки</span>
				</div>
			</div>
			<div>
				<nav>
					<ul className={styles.navlist}>
						{CONTACTS_NAV_ITEMS.map(({ id, name, href }) => (
							<li key={id} className={styles.navitem}>
								<a href={href}>{name}</a>
							</li>
						))}
						<li className={`${styles.navitem} ${styles.navitemButton}`}>
							<a href='/'>Предложить идею</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
