import './AddMedication.scss';
import Header from '../../components/Header/Header.jsx';
import { useParams } from 'react-router-dom';

export default function AddMedication() {
	const { userId } = useParams();

	const handleFormSubmit = () => {};

	return (
		<main className='new-medication'>
			<Header
				headerText={'Add Medication'}
				returnUrl={`/medications/${userId}`}
			/>
			<form
				className='new-medication__form'
				onSubmit={handleFormSubmit}
				id='new-medication__form'
			>
				<label htmlFor='medication-name'>
					<p>Medication Name</p>
					<input
						type='text'
						id='medication-name'
						name='medication-name'
						placeholder='Medication Name'
						className='new-medication__input'
					/>
				</label>
				<label htmlFor='medication-dosage'>
					<p>Medication Dosage (mg/ml)</p>
					<input
						type='text'
						id='medication-dosage'
						name='medication-dosage'
						placeholder='Medication Dosage'
						className='new-medication__input'
					/>
				</label>
				<label htmlFor='pill-dosage'>
					<p>Individual Pill Dosage (mg/ml)</p>
					<input
						type='text'
						id='pill-dosage'
						name='pill-dosage'
						placeholder='Pill Dosage'
						className='new-medication__input'
					/>
				</label>
				<label htmlFor='dosage-time'>
					<p>Dosage Time</p>
					<input
						type='time'
						id='dosage-time'
						name='dosage-time'
						placeholder='Dosage time'
						className='new-medication__input'
					/>
				</label>
				<button className='new-medication__submit'>Submit</button>
			</form>
		</main>
	);
}
