import './Home.scss';
import Header from '../../components/Header/Header.jsx';

export default function Home(){
    return <main className='home'>
    <Header headerText={'Home'} returnUrl={'/'} editUrl={'/'}/>
    <p>Hello</p>
    </main>
}