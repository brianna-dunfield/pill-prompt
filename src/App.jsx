import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import MedicationDisplay from './pages/MedicationDisplay/MedicationDisplay.jsx';
import AddMedication from './pages/AddMedication/AddMedication.jsx';
import Prompt from './pages/Prompt/Prompt.jsx';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/medications/:userId'
						element={<MedicationDisplay />}
					/>
					<Route
						path='/add-medication/:userId'
						element={<AddMedication />}
					/>
					<Route
						path='/prompt/:userId'
						element={<Prompt />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
