import styles from './styles.module.css';
import { Minus, Plus } from 'phosphor-react';

export function CounterButton(props) {
    return (
        <div className={styles.counter} style={{height: props.height}}>
            <button className={styles.minus}><Minus size={14} weight='bold' /></button>
            <div className={styles.counterValue}>1</div>
            <button className={styles.plus}><Plus size={14} weight='bold' /></button>
        </div>
    )
}