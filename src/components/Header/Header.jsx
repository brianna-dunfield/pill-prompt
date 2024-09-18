import './Header.scss';
import backImg from '../../assets/icons/back.svg';
import addImg from '../../assets/icons/plus.svg';
import { Link } from 'react-router-dom';

export default function Header({ headerText, returnUrl, editUrl = null }) {
	return (
		<section className='header'>
			<div className='header-left'>
				<Link to={returnUrl}>
					<img
						className='header__back-img'
						src={backImg}
						alt='Blue arrow pointing left.'
					/>
				</Link>
				<h2 className='header__text'>{headerText}</h2>
			</div>
			{editUrl ? (
				<Link to={editUrl}>
					<img
                        className='header__add-img'
						src={addImg}
						alt='White plus sign'
					/>
				</Link>
			) : null}
		</section>
	);
}
