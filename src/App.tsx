import './App.sass'
import Contacts from './components/Contacts/Contacts'
import Divider from './components/Divider/Divider'
import Footer from './components/Footer/Footer'
import FooterNav from './components/FooterNav/FooterNav'
import GoodComponent from './components/GoodComponent/GoodComponent'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import { useAppSelector } from './hooks/redux'

function App() {
	const {} = useAppSelector((state) => state.cartReducer)
	return (
		<div className='container'>
			<Header />
			<Divider />
			<Navigation />
			<Divider />
			<main className='main'>
				<GoodComponent />
			</main>
			<Divider />
			<Contacts />
			<Divider />
			<FooterNav />
			<Divider />
			<Footer />
		</div>
	)
}

export default App
