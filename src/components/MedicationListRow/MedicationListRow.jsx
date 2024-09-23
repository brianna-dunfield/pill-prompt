import './MedicationListRow.scss';

export default function MedicationListRow({
	medicationName,
	medicationDosage,
	medicationTime,
}) {

	return (
		<article className='medication'>
			<img
				className='medication__img'
				src={`http://localhost:8080/images/${medicationName}.jpg`}
				alt={`${medicationName} pill`}
			/>
			<div className='medication__information'>
                <label className='medication__information-label'>Medication Name</label>
				<p className='medication__information-text'>{medicationName}</p>
                <label className='medication__information-label'>Medication Dosage</label>
				<p className='medication__information-text'>{medicationDosage}</p>
                <label className='medication__information-label'>Dose Time</label>
				<p className='medication__information-text'>{medicationTime}</p>
			</div>
		</article>
	);
}
