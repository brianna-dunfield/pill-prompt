import './PromptCard.scss';
import { useEffect, useState } from 'react';
import { getIndividualMedication } from '../../utils/api.js';
import check from '../../assets/icons/checkInCircle.svg';
import reminder from '../../assets/icons/reminder.svg';

export default function PromptCard({
	medicationName,
	userId,
	first = false,
	last = false,
	setCurrentMedication,
}) {
	const [medicationInformation, setMedicationInformation] = useState();

	useEffect(() => {
		const fetchInfo = async () => {
			try {
				const result = await getIndividualMedication(
					userId,
					medicationName
				);
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

	const handleNextClick = () => {
		setCurrentMedication((prevMedication) => prevMedication - 1);
	};

	const handlePreviousClick = () => {
		setCurrentMedication((prevMedication) => prevMedication + 1);
	};

	return (
		<div className='page-body'>
			<article className='prompt'>
				<h2 className='prompt__header'>Take Medication</h2>
				<img
					className='prompt__image'
					src={`http://localhost:8080/images/${medicationName}.jpg`}
					alt={`${medicationName} pill image`}
				/>
				<div className='prompt__main-info'>
					<div>
						<p className='prompt__label'>Medication Name</p>
						<p className='prompt__info'>
							{medicationInformation.medication_name}
						</p>
					</div>
					<div>
						<p className='prompt__label'>Time of Dose</p>
						<p className='prompt__info'>
							{medicationInformation.medication_dose_time}
						</p>
					</div>
				</div>
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
				<div className='prompt__option'>
					<img
						className='prompt__option-yes'
						src={check}
						alt='Green checkmark in a green circle'
					/>
					<img
						className='prompt__option-later'
						src={reminder}
						alt='Yellow clock'
					/>
				</div>
				<div className='prompt__navigation'>
					{first ? (
						<button
							onClick={handleNextClick}
							className='hide'
						>
							PREVIOUS
						</button>
					) : (
						<button onClick={handleNextClick}>PREVIOUS</button>
					)}
					{last ? (
						<button
							className='hide'
							onClick={handlePreviousClick}
						>
							NEXT
						</button>
					) : (
						<button
							className='prompt__navigation-next {}'
							onClick={handlePreviousClick}
						>
							NEXT
						</button>
					)}
				</div>
			</article>
		</div>
	);
}
