import './MedicationDisplay.scss';
import Header from '../../components/Header/Header.jsx';
import { useParams } from 'react-router-dom';

export default function MedicationDisplay() {
	let { userId } = useParams();

	return (
		<main className='medication-display'>
			<Header
				headerText='Medications'
				returnUrl='/'
				editUrl={`/add-medication/${userId}`}
			/>
		</main>
	);
}
