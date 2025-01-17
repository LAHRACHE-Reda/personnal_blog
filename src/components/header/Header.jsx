import './Header.css';
import reactImg from '../../assets/logo.png'

function Header() {
    return (
        <header>
            <img src={reactImg} alt='logo'/>
            <h1>React Essentials</h1>
            <p>
                Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default Header;