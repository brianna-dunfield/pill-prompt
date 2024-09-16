import './NavBar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/pill_prompt_logo.png';

export default function NavBar() {
	return (
		<nav className='nav'>
			<img
				className='nav__logo'
				src={logo}
				alt='Pill with blue top and green bottom rotated 45 degrees to the right with the words pill prompt underneath in blue.'
			/>
			<Link className='nav__button' to='/'>Login</Link>
		</nav>
	);
}
