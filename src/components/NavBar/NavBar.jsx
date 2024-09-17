import './NavBar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/pill_prompt_logo.png';

export default function NavBar() {
	return (
		<nav className='nav'>
			<Link className='nav__logo'>
				<img
					className='nav__logo-img'
					src={logo}
					alt='Pill with blue top and green bottom rotated 45 degrees to the right.'
				/>
				<h1 className='nav__logo-text'>Pill Prompt</h1>
			</Link>

			<Link
				className='nav__button'
				to='/'
			>
				Login
			</Link>
		</nav>
	);
}
