import SVGFilters from '@/components/ui/svg-icons/SVGFilters'
import SVGPlus from '@/components/ui/svg-icons/SVGPlus'
import SVGSearch from '@/components/ui/svg-icons/SVGSearch'
import { FC } from 'react'
import * as styles from './Select.module.scss'

const Select: FC = () => {
	return (
		<div className={styles.sort}>
			<button className={`${styles.button}  `}>
				<SVGSearch />
			</button>
			<input className={styles.input} />
			<div className={styles.buttons}>
				<button className={`${styles.button}  `}>
					<SVGFilters />
				</button>
				<button className={`${styles.button}  `}>
					<SVGPlus />
				</button>
			</div>
		</div>
	)
}
export default Select
