import map from '@/assets/images/map.png'
import DropDown from '@/components/ui/drop-down/DropDown'
import SVGEdit from '@/components/ui/svg-icons/SVGEdit'
import { notes } from '@/shared/data/notes.json'
import { FC, useState } from 'react'
import * as styles from './Tabs.module.scss'

const TabssNotes: FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const handleSetOpen = (idx: number) => {
		setOpenIndex(prevIndex => {
			if (prevIndex === idx) {
				return null // Закрываем элемент, если он уже открыт
			} else {
				return idx // Открываем элемент
			}
		})
	}
	return (
		<>
			<div className={styles.notes__body}>
				<div className={styles.notes__content}>
					{notes.map((item, idx) => (
						<div key={item.id} className={styles.notes__text}>
							<p>
								<span> {item.data}</span> {item.text}
							</p>
							<div className={styles.notes__action}>
								<DropDown isOpen={openIndex === idx} />
								<button
									className={styles.notes__button}
									onClick={() => handleSetOpen(idx)}
								>
									<SVGEdit />
								</button>
							</div>
						</div>
					))}
				</div>
				<div className={styles.notes__map}>
					<img src={map} alt='map' />
				</div>
			</div>
		</>
	)
}
export default TabssNotes
