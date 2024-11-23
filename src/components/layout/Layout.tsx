import { FC, ReactNode } from 'react'
import SideBar from '../SideBar/SideBar'
import * as styles from './Layout.module.scss'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className='container'>
			<div className={`${styles.container}`}>
				<SideBar />f{children}
			</div>
		</div>
	)
}
export default Layout
