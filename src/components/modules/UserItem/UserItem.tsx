import Checkbox from '@/components/ui/checkbox/Checkbox'
import SVGTelegram from '@/components/ui/svg-icons/SVGTelegram'
import { IUser } from '@/shared/types/user/user-interface'
import { FC } from 'react'
import * as styles from './UserItem.module.scss'
interface IUserItem {
	handleSelectUser?: (id: number) => void
	selectedUsers?: number[]
	isSelectedAllCheckbox?: boolean
	item: IUser
}

const UserItem: FC<IUserItem> = ({
	item,
	handleSelectUser,
	selectedUsers,
	isSelectedAllCheckbox,
}) => {
	const isSomeUser = selectedUsers.some(id => id === item.id)

	return (
		<button onClick={() => handleSelectUser(item.id)} className={styles.user}>
			{!!selectedUsers.length && (
				<Checkbox select={isSomeUser || isSelectedAllCheckbox} />
			)}

			<div className={styles.user__image}>
				<img src={item.img} alt='user' />
			</div>

			<div className={styles.user__name}>{item.name}</div>
			<SVGTelegram />
			<div>{item.icon}</div>
		</button>
	)
}
export default UserItem
