import styles from './styles.module.css';
import headerLogo from '../../assets/header-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <NavLink to='/'>
                <img src={headerLogo} alt="" />
            </NavLink>

            <div className={styles.headerButtons}>
                <button className={styles.locationButton}>
                    <MapPin size={22} weight='fill' />
                    <span>Porto Alegre, RS</span>
                </button>
                <NavLink className={styles.cartButton} to='/checkout'>
                    <ShoppingCart size={22} weight='fill' />
                </NavLink>
            </div>
        </header>
    )
}