import styles from './Footer.module.sass'
import FooterList from './FooterList'

import LogoIcon from '../../images/logo.svg?react'

export interface FooterProps {}

export default function Footer({}: FooterProps) {
	return (
		<footer className={styles.footer}>
			<div>
				<FooterList />
			</div>
			<div className={styles.policy}>
				Настоящая Политика обработки персональных данных разработана в
				соответствии с Конституцией Российской Федерации, Трудовым кодексом
				Российской Федерации, Гражданским кодексом Российской Федерации,
				Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
				информационных технологиях и о защите информации",
			</div>
			<div>
				<LogoIcon className={styles.logo} />
				<span>Разработка платформы</span>
			</div>
		</footer>
	)
}
