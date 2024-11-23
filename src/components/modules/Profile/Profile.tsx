import img from '@/assets/images/profile-1.png'
import SVGEdit from '@/components/ui/svg-icons/SVGEdit'
import { FC } from 'react'
import * as styles from './Profile.module.scss'

const Profile: FC = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.profile__image}>
				<img src={img} alt='profile' />
			</div>
			<div className={styles.profile__info}>
				<div>Рожков Денис Петрович</div>
				<div>30 лет, муж</div>
			</div>
			<div className={styles.profile__editor}>
				<SVGEdit />
			</div>
		</div>
	)
}
export default Profile
