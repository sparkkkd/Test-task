import styles from './Search.module.sass'
import CancelIcon from '../../images/cancel.svg?react'
import SearchIcon from '../../images/search.svg?react'

export interface SearchProps {}

export default function Search({}: SearchProps) {
	return (
		<div className={styles.searchWrapper}>
			<input className={styles.search} placeholder='Введите запрос' />
			<div>
				<CancelIcon className={styles.cancelIcon} />
				<SearchIcon className={styles.searchIcon} />
			</div>
		</div>
	)
}
