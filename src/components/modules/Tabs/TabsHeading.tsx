import SVGPlus from '@/components/ui/svg-icons/SVGPlus'
import { FC } from 'react'
import * as styles from './Tabs.module.scss'
interface ITabsHeading {
	activeTab: string
	handleTabClick: (type: string) => void
}
const TabsHeading: FC<ITabsHeading> = ({ activeTab, handleTabClick }) => {
	return (
		<div className={styles.head}>
			<div className={styles.head__items}>
				<button
					className={`${styles.head__title} ${
						activeTab === 'notes' ? styles.active : ''
					}`}
					onClick={() => handleTabClick('notes')}
				>
					Заметки
				</button>
				<button
					className={`${styles.head__title} ${
						activeTab === 'consultations' ? styles.active : ''
					}`}
					onClick={() => handleTabClick('consultations')}
				>
					Консультации
				</button>
				<button
					className={`${styles.head__title} ${
						activeTab === 'videos' ? styles.active : ''
					}`}
					onClick={() => handleTabClick('videos')}
				>
					Видео
				</button>
				<button
					className={`${styles.head__title} ${
						activeTab === 'events' ? styles.active : ''
					}`}
					onClick={() => handleTabClick('events')}
				>
					Мероприятия
				</button>
			</div>
			<div className={styles.head__action}>
				<div className={styles.head__note}>Новая заметка</div>
				<button className={styles.head__add}>
					<SVGPlus />
				</button>
			</div>
		</div>
	)
}
export default TabsHeading
