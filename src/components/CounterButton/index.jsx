import styles from './styles.module.css';
import { Minus, Plus } from 'phosphor-react';

export function CounterButton(props) {

    function handleMinusCoffee() {
        if(props.amount > 1) {
            props.setCoffeeAmount(props.amount-1);
        }
    }

    function handleAddCoffee() {
        props.setCoffeeAmount(props.amount+1);
    }

    return (
        <div className={styles.counter} style={{height: props.height}}>
            <button className={styles.minus}><Minus size={14} weight='bold' onClick={handleMinusCoffee} /></button>
            <div className={styles.counterValue}>{props.amount}</div>
            <button className={styles.plus}><Plus size={14} weight='bold' onClick={handleAddCoffee} /></button>
        </div>
    )
}