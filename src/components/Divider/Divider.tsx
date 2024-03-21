import styles from './Divider.module.sass'

export interface DividerProps {}

export default function Divider({}: DividerProps) {
	return <div className={styles.divider}></div>
}
