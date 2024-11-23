import { FC } from 'react'
import * as styles from './Checkbox.module.scss'

const Checkbox: FC<{ select: boolean }> = ({ select }) => {
	return (
		<label
			className={`${styles.checkbox} ${select ? styles.checkbox_select : ''}`}
		>
			<input type='checkbox' />
			<span className={styles.checkbox__element}></span>
		</label>
	)
}
export default Checkbox
