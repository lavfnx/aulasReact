import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return(
        <header className='menu'>
            <img src={Logo}/>
            <h1>Exibe Perfil</h1>
        </header> 
    )
}

export default Header;