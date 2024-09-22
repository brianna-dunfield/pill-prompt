import './Prompt.scss';
import {useParams, useSearchParams} from 'react-router-dom';
import PromptCard from '../../components/PromptCard/PromptCard.jsx';

export default function Prompt() {
	const {userId} = useParams();
	const [searchParams] = useSearchParams();
	console.log('SEARCH PARAMS', Object.fromEntries([...searchParams]));
	return <main>
		<PromptCard medicationName='Lisinopril' userId='1' />
	</main>;
}
