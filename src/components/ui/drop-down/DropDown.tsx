import { FC } from 'react'
import * as styles from './DropDown.module.scss'
// import styles from './DropDown.module.scss'

const DropDown: FC<{ isOpen: boolean }> = ({ isOpen }) => {
	if (!isOpen) return null
	return (
		<div className={styles.dropDown}>
			<button className={styles.dropDown__item}>Изменить</button>
			<button className={styles.dropDown__item}>Удалить</button>
		</div>
	)
}
export default DropDown
