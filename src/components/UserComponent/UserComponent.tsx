import styles from './UserComponent.module.sass'

import UserAvatart from '../../images/Avatar.jpg'
import ArrowDown from '../../images/arrow-down.svg?react'

export interface UserComponentProps {}

export default function UserComponent({}: UserComponentProps) {
	return (
		<div className={styles.userComponent}>
			<img src={UserAvatart} alt='Avatar' />
			<span>Ермаков Е.</span>
			<ArrowDown className='icon' />
		</div>
	)
}
