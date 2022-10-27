import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import styles from './styles.module.css';

export function Item({title, subtitle, icon}) {
    let ICON = '';
    let TEXT = '';
    switch (icon) {
        case 'delivery':
            ICON = 
            <div className={styles.icon} style={{backgroundColor: '#8047F8'}}>
                <MapPin color='white' size={13.5} weight='fill' style={{width: '2rem'}} />
            </div>;
            TEXT = 
            <div className={styles.flexColumn}>
                <span className={styles.text}>Entrega em <span className={styles.bold}>{title}</span></span>
                <span className={styles.text}>{subtitle}</span>
            </div>;
            break;
        case 'timer':
            ICON = 
            <div className={styles.icon} style={{backgroundColor: '#DBAC2C'}}>
                <Timer color='white' size={13.5} weight='fill' style={{width: '2rem'}} />
            </div>;
            TEXT = 
            <div className={styles.flexColumn}>
                <span className={styles.text}>Entrega em <span className={styles.bold}>{title}</span></span>
                <span className={styles.text}>{subtitle}</span>
            </div>;
            break;
        case 'money':
            ICON = 
            <div className={styles.icon} style={{backgroundColor: '#C47F17'}}>
                <CurrencyDollar  color='white' size={13.5} weight='fill' style={{width: '2rem'}} />
            </div>;
            TEXT = 
            <div className={styles.flexColumn}>
                <span className={styles.text}>Entrega em <span className={styles.bold}>{title}</span></span>
                <span className={styles.text}>{subtitle}</span>
            </div>;
            break;
    
        default:
            break;
    }
    return (
        <div className={styles.content}>
            {ICON}
            {TEXT}
        </div>
    )
}