import './PromptCard.scss';
import { useEffect, useState } from 'react';
import { getIndividualMedication } from '../../utils/api.js';

export default function PromptCard({ medicationName, userId }) {
	const [medicationInformation, setMedicationInformation] = useState();

	useEffect(() => {
		const fetchInfo = async () => {
			try {
				const result = await getIndividualMedication(
					userId,
					medicationName
				);
				console.log(result.data);
				setMedicationInformation(result.data);
			} catch (error) {
				console.error(
					'There was an error fetching the information for: ',
					medicationName,
					error
				);
			}
		};
		fetchInfo();
	}, []);

	if (!medicationInformation) {
		return <p>Loading...</p>;
	}

	return (
		<article className='prompt'>
			<h2 className='prompt__header'>Take Medication</h2>
			<img
				className='prompt__image'
				src={`http://localhost:8080/images/${medicationName}.jpg`}
				alt={`${medicationName} pill image`}
			/>
			<p className='prompt__label'>Medication Name</p>
			<p className='prompt__info'>
				{medicationInformation.medication_name}
			</p>
			<p className='prompt__label'>Time of Dose</p>
			<p className='prompt__info'>
				{medicationInformation.medication_dose_time}
			</p>
			<div className='prompt__dose-info'>
				<div>
					<p className='prompt__label'>Number of Tablets</p>
					<p className='prompt__info'>
						{medicationInformation.user_dosage /
							medicationInformation.pill_dosage}
					</p>
				</div>
				<div>
					<p className='prompt__label'>Total Dose</p>
					<p className='prompt__info'>
						{`${medicationInformation.user_dosage} mg`}
					</p>
				</div>
			</div>
			<div>
				<img
					className='prompt__yes-image'
					src=''
					alt=''
				/>
				<img
					className='prompt__later-image'
					src=''
					alt=''
				/>
			</div>
		</article>
	);
}
