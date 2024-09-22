import './AddMedication.scss';
import Header from '../../components/Header/Header.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { postNewMedication } from '../../utils/api.js';

export default function AddMedication() {
	const { userId } = useParams();
	const navigate = useNavigate();

	async function handleFormSubmit(event) {
		event.preventDefault();

		const target = event.target;
		console.log(target.pill_dosage.value);
		const newMedication = {
			user_id: userId,
			medication_name: target.medication_name.value,
			user_dosage: target.user_dosage.value,
			pill_dosage: target.pill_dosage.value,
			medication_dose_time: target.medication_dose_time.value,
		};

		try {
			await postNewMedication(userId, newMedication);
		} catch (error) {
			console.error(
				'There was an error posting your new medication',
				error
			);
		}
		navigate(`/medications/${userId}`, { replace: true });
	}

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
				<label htmlFor='medication_name'>
					<p>Medication Name</p>
					<input
						type='text'
						id='medication_name'
						name='medication_name'
						placeholder='Medication Name'
						className='new-medication__input'
					/>
				</label>
				<label htmlFor='user_dosage'>
					<p>Medication Dosage (mg/ml)</p>
					<input
						type='text'
						id='user_dosage'
						name='user_dosage'
						placeholder='Medication Dosage'
						className='new-medication__input'
					/>
				</label>
				<label htmlFor='pill_dosage'>
					<p>Individual Pill Dosage (mg/ml)</p>
					<input
						type='text'
						id='pill_dosage'
						name='pill_dosage'
						placeholder='Pill Dosage'
						className='new-medication__input'
					/>
				</label>
				<label htmlFor='medication_dose_time'>
					<p>Dosage Time</p>
					<input
						type='time'
						id='medication_dose_time'
						name='medication_dose_time'
						placeholder='Dosage time'
						className='new-medication__input'
					/>
				</label>
				<button className='new-medication__submit'>Submit</button>
			</form>
		</main>
	);
}
