import { consultations } from '@/shared/data/consultations.json'
import { FC, useState } from 'react'
import { ReactSVG } from 'react-svg'
import * as styles from './Tabs.module.scss'
const TabsConsultations: FC = () => {
	const [isStatus, setIsStatus] = useState(false)
	const [isSelect, setIsSelect] = useState(true)

	return (
		<div className={`${styles.consultations} `}>
			<div className={styles.consultations__items}>
				{consultations.map(item => (
					<div key={item.id} className={`${styles.consultations__item} `}>
						<div className={styles.consultations__content}>
							<ReactSVG
								src={item.icon}
								className={styles.consultations__icon}
							/>
							<div>
								<div className={styles.consultations__title}>{item.title}</div>
								<div className={styles.consultations__date}>{item.date}</div>
							</div>
						</div>
						<div
							className={`${styles.consultations__status} ${
								isStatus
									? styles.consultations__status_success
									: styles.consultations__status_error
							}`}
						>
							{item?.state}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default TabsConsultations
