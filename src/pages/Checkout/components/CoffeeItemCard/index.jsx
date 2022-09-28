import styles from './styles.module.css'
import { Trash } from 'phosphor-react';

import { CounterButton } from '../../../../components/CounterButton';

import img from '../../../../data/assets/Type=Americano.png';

export function CoffeeItemCard() {
    return (
        <div className={styles.container}>
            <div className={styles.imageInfos}>
                <img src={img} alt="" />
                <div className={styles.nameButtons}>
                    <h1 className={styles.name}>Expresso Tradicional</h1>
                    <div className={styles.buttons}>
                        <CounterButton height='2rem' />
                        <button className={styles.removeButton}>
                            <Trash size={16} color="#8047F8" />
                            <span>REMOVER</span>
                        </button>
                    </div>
                </div>
            </div>
            <span className={styles.price}>R$ 9,90</span>
        </div>
    )
}