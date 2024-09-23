import './MedicationList.scss';
import { useEffect, useState } from 'react';
import { getUserMedication } from '../../utils/api';
import MedicationListRow from '../MedicationListRow/MedicationListRow.jsx';

export default function MedicationList({ userId }) {
	const [userMedications, setUserMedications] = useState([]);

	useEffect(() => {
		const fetchMedications = async () => {
			try {
                const result = await getUserMedication(userId);
                setUserMedications(organizeMedications(result.data));
			} catch (error) {
				console.error('Error while fetching user medication:', error);
			}
		};
        fetchMedications();
	}, []);
    
	function organizeMedications(listOfMedications){
		return listOfMedications.sort((a, b) => {
			const [aHours, aMinutes] = a.medication_dose_time.split(':').map(Number);
			const [bHours, bMinutes] = b.medication_dose_time.split(':').map(Number);
	
			return (aHours * 60 + aMinutes) - (bHours * 60 + bMinutes);
		});
	}

	return <section className='medication-list'>
		<div className='medication-list__bar'>
			<p>Image</p>
			<p>Medication Name</p>
			<p>Dose</p>
			<p>Dose Time</p>
		</div>
        {userMedications.map((medication, index)=>{
            return <MedicationListRow key={index} medicationName={medication.medication_name} medicationDosage={medication.user_dosage} medicationTime={medication.medication_dose_time}/>
        })}
    </section>;
}