import styles from './styles.module.css';
import headerLogo from '../../assets/header-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
    return (
        <header>
            <img src={headerLogo} alt="" />

            <div className={styles.headerButtons}>
                <button className={styles.locationButton}>
                    <MapPin size={22} weight='fill' />
                    <span>Porto Alegre, RS</span>
                </button>
                <button className={styles.cartButton}>
                    <ShoppingCart size={22} weight='fill' />
                </button>
            </div>
        </header>
    )
}