import './App.sass'
import Divider from './components/Divider/Divider'
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
		</div>
	)
}

export default App