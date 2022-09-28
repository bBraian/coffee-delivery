import styles from './CoffeeCard.module.css';
import { ShoppingCart} from 'phosphor-react';
import { CounterButton } from '../../../components/CounterButton';

export function CoffeeCard({data}) {
    console.log(data)
    return (
        <div className={styles.container}>
            <img src={data.image} alt="" />

            <div className={styles.tagContainer}>
            {data.tag.map(tagg => {
                return (
                    <span className={styles.tag}>{tagg.name}</span>
                    )
                })}
            </div>

            <h1 className={styles.name}>{data.name}</h1>
            <span className={styles.description}>{data.description}</span>

            <div className={styles.cartRow}>
                <span>R$ <b>{data.price}</b></span>
                <div className={styles.cartButtons}>
                    <CounterButton />
                    <button className={styles.cartButton}><ShoppingCart weight='fill' size={20} /></button>
                </div>

            </div>
        </div>
    )
}