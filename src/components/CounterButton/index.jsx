import styles from './styles.module.css';
import { Minus, Plus } from 'phosphor-react';

export function CounterButton() {
    return (
        <div className={styles.counter}>
            <button className={styles.minus}><Minus size={14} weight='bold' /></button>
            <div className={styles.counterValue}>1</div>
            <button className={styles.plus}><Plus size={14} weight='bold' /></button>
        </div>
    )
}