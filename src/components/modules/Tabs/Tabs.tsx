import { FC, useState } from 'react'
import TabeEvents from './TabeEvents'
import TabsConsultations from './TabsConsultations'
import TabsHeading from './TabsHeading'
import TabssNotes from './TabsNotes'
import TabsVideos from './TabsVideos'

const Tabs: FC = () => {
	const [activeTab, setActiveTab] = useState('notes')

	const handleTabClick = (tab: string) => {
		setActiveTab(tab)
	}

	return (
		<div>
			<TabsHeading activeTab={activeTab} handleTabClick={handleTabClick} />
			{activeTab === 'notes' && <TabssNotes />}
			{activeTab === 'consultations' && <TabsConsultations />}
			{activeTab === 'videos' && <TabsVideos />}
			{activeTab === 'events' && <TabeEvents />}
		</div>
	)
}

export default Tabs
