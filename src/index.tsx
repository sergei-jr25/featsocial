import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles.scss'
const root = createRoot(document.getElementById('root') as HTMLElement)
console.log('roor', root)

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
