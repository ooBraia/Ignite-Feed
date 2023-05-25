import styles from './Header.module.css';
import logo from '../components/img/LogoHeader.svg';

export function Header(){
    return ( 
        <header className={styles.header}>
            <img src={logo} alt='Logotipo do Ignite' />            
        </header>
    )
}