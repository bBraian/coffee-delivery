import styles from './styles.module.css'
import { Trash } from 'phosphor-react';

import { CounterButton } from '../../../../components/CounterButton';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../context/CartContext';

export function CoffeeItemCard({ data }) {
    const [coffeeAmount, setCoffeeAmount] = useState(data.amount);
    const { removeCoffee } = useContext(CartContext);
    return (
        <div className={styles.container}>
            <div className={styles.imageInfos}>
                <img src={data.image} alt="" />
                <div className={styles.nameButtons}>
                    <h1 className={styles.name}>{data.name}</h1>
                    <div className={styles.buttons}>
                        <CounterButton height='2rem' amount={coffeeAmount} setCoffeeAmount={setCoffeeAmount} />
                        <button className={styles.removeButton} onClick={() => removeCoffee(data.id)}>
                            <Trash size={16} color="#8047F8" />
                            <span>REMOVER</span>
                        </button>
                    </div>
                </div>
            </div>
            <span className={styles.price}>R$ {data.price}</span>
        </div>
    )
}