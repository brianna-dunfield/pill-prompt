import './SuccessModal.scss';
import { useNavigate } from 'react-router-dom';

export default function SuccessModal({ setModalStatus, navigateTo }) {
    const navigate = useNavigate();
    
    const handleClick = () =>{
        setModalStatus(false);
        navigate(`../../${navigateTo}`, {replace: true});
    }
	return (
		<article className='success-modal__overlay'>
			<div className='success-modal'>
				<button className='success-modal__close' onClick={handleClick}>x</button>
				<h3>New Medication has been successfully added.</h3>
				<button className='success-modal__return' onClick={handleClick}>Return to medications</button>
			</div>
		</article>
	);
}
