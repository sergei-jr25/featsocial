import { FC } from 'react'
import './App.scss'
import Main from './Screens/Main'
import Layout from './layout/Layout'

const App: FC = () => {
	return (
		<Layout>
			<h1>Hi my name Is Slim Shady Whan my Name Is</h1>
			<Main />
		</Layout>
	)
}
export default App
