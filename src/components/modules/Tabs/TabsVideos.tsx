import { videos } from '@/shared/data/videos.json'
import { FC } from 'react'
import * as styles from './Tabs.module.scss'

const TabsVideos: FC = () => {
	return (
		<div className={styles.videos}>
			<div className={styles.videos__items}>
				{videos.map(item => (
					<div key={item.id} className={styles.videos__item}>
						<div className={styles.videos__content}>
							<div className={styles.videos__image}>
								<img src={item.img} />
							</div>
							<div>
								<div className={styles.videos__text}>{item.text}</div>
								<div className={styles.videos__author}>{item.author}</div>
							</div>
						</div>
						<div className={styles.videos__date}>{item.date}</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default TabsVideos
