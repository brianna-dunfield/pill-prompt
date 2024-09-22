import './Prompt.scss';
import { useParams, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PromptCard from '../../components/PromptCard/PromptCard.jsx';

export default function Prompt() {
	const { userId } = useParams();
	const [searchParams] = useSearchParams();
	const [medications, setMedications] = useState([]);
	const [promptCards, setPromptCards] = useState([]);
	const [currentMedication, setCurrentMedication] = useState(0);

	useEffect(() => {
		setMedications(
			Object.fromEntries([...searchParams]).medications.split(',')
		);
	}, []);

	useEffect(() => {
		if (medications.length > 0) {
			const cards = medications.map((medication, index) => {
				return (
					<PromptCard
						medicationName={medication}
						userId={userId}
						key={index}
						first={index === 0}
						last={index === medications.length - 1}
						setCurrentMedication={setCurrentMedication}
					/>
				);
			});
			setPromptCards(cards);
		}
	}, [medications, userId]);

	return <main>{promptCards[currentMedication]}</main>;
}
