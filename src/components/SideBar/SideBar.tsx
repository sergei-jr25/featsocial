import Select from '@/components/modules/Select/Select'
import UserItem from '@/components/modules/UserItem/UserItem'
import { users } from '@/shared/data/users.json'
import { FC, useState } from 'react'
import Checkbox from '../ui/checkbox/Checkbox'
import * as styles from './SideBar.module.scss'

const SideBar: FC = () => {
	const [selectedUsers, setSelectedUsers] = useState([])
	const [isSelectedAllCheckbox, setIsSelectedAllCheckbox] = useState(false)

	const handleSelectUser = (id: number) => {
		setSelectedUsers(prevSelectedUsers => {
			const isSelected = prevSelectedUsers.includes(id)
			return isSelected
				? prevSelectedUsers.filter(userId => userId !== id)
				: [...prevSelectedUsers, id]
		})
	}

	const handleCheckbox = () => {
		setSelectedUsers(users.map(item => item.id))
		setIsSelectedAllCheckbox(true)
	}

	const resetCheckbox = () => {
		setIsSelectedAllCheckbox(false)
		setSelectedUsers([])
	}

	return (
		<div className={styles.open}>
			<Select />
			<div className={styles.control}>
				<div className={styles.control__quantity}>
					{!!selectedUsers.length ? (
						<div className={styles.control__item}>
							<button
								className={styles.control__button}
								onClick={handleCheckbox}
							>
								<Checkbox select={isSelectedAllCheckbox} />
								Все
							</button>
							<span className={styles.control__value}>
								{selectedUsers.length}
							</span>
						</div>
					) : (
						<span
							className={`${styles.control__value} ${
								!!!selectedUsers.length ? styles.control__value_dark : ''
							}`}
						>
							{users.length}
						</span>
					)}
				</div>

				{!!selectedUsers.length ? (
					<div className={styles.control__actions}>
						<div>Действия</div>
						<button onClick={resetCheckbox}>Отменить</button>
					</div>
				) : (
					<div> Выбрать</div>
				)}
			</div>
			<div className={styles.users}>
				{users.map(item => (
					<UserItem
						item={item}
						handleSelectUser={handleSelectUser}
						key={item.id}
						selectedUsers={selectedUsers}
						isSelectedAllCheckbox={isSelectedAllCheckbox}
					/>
				))}
			</div>
		</div>
	)
}
export default SideBar
