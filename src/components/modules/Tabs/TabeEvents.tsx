import { events } from '@/shared/data/events.json'
import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import * as styles from './Tabs.module.scss'

const TabeEvents: FC = () => {
	return (
		<div className={styles.events}>
			<div className={styles.events__items}>
				{events.map(item => (
					<div className={styles.events__item}>
						<div className={styles.events__image}>
							<img src={item.img} />
						</div>
						<div>
							<div className={styles.events__text}>{item.text}</div>

							<div className={styles.events__info}>
								<span>
									<ReactSVG src={item.info.vebinar.icon} />
									{item.info.vebinar.title}
								</span>
								<span>
									<ReactSVG src={item.info.date.icon} />
									{item.info.date.title}
								</span>
								<span>
									<ReactSVG src={item.info.time.icon} />
									{item.info.time.title}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default TabeEvents
