import styles from './FooterList.module.sass'
import { FOOTER_LINKS } from './constant'

export interface FooterProps {}

export default function FooterList({}: FooterProps) {
	return (
		<ul className={styles.list}>
			{FOOTER_LINKS.map(({ id, name, icon, isAccent }) => (
				<li
					key={id}
					className={`${styles.item} ${isAccent && styles.itemAccent}`}
				>
					<a href=''>
						{icon}
						<span>{name}</span>
					</a>
				</li>
			))}
		</ul>
	)
}
