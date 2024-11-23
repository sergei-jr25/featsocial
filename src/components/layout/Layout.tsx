import { FC, ReactNode } from 'react'
import SideBar from '../SideBar/SideBar'
import * as styles from './Layout.module.scss'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className='container'>
			<div className={`${styles.container}`}>
				<SideBar />
				{children}
			</div>
		</div>
	)
}
export default Layout
