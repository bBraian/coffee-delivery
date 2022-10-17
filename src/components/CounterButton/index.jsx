import styles from './styles.module.css';
import { Minus, Plus } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function CounterButton(props) {
    const { setCoffeeAmount } = useContext(CartContext);

    function handleMinusCoffee() {
        if(props.amount > 1) {
            setCoffeeAmount(props.amount-1);
        }
    }

    function handleAddCoffee() {
        setCoffeeAmount(props.amount+1);
    }

    return (
        <div className={styles.counter} style={{height: props.height}}>
            <button className={styles.minus}><Minus size={14} weight='bold' onClick={handleMinusCoffee} /></button>
            <div className={styles.counterValue}>{props.amount}</div>
            <button className={styles.plus}><Plus size={14} weight='bold' onClick={handleAddCoffee} /></button>
        </div>
    )
}