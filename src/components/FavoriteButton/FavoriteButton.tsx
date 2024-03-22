import styles from './FavoriteButton.module.sass'

import FavIcon from '../../images/fav-icon.svg?react'
import { useState } from 'react'

export interface FavoriteButtonProps {}

export default function FavoriteButton({}: FavoriteButtonProps) {
	const [isFavActive, setIsFavActive] = useState<boolean>(false)

	return (
		<button
			className={`${styles.favoriteButton} ${
				isFavActive && styles.favoriteButtonActive
			}`}
			onClick={() => setIsFavActive((prev) => !prev)}
		>
			<FavIcon className={styles.favIcon} />
		</button>
	)
}
