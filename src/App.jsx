import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
//import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Outlet />
			<Home />
		</div>
	);
}

export default App;
