import styles from './CoffeeCard.module.css';
import { ShoppingCart, Minus, Plus } from 'phosphor-react';

export function CoffeeCard({data}) {
    return (
        <div className={styles.container}>
            <img src={data.image} alt="" />

            <span className={styles.tag}>{data.tag}</span>
            <h1 className={styles.name}>{data.name}</h1>
            <span className={styles.description}>{data.description}</span>

            <div className={styles.cartRow}>
                <span>R$ <b>{data.price}</b></span>
                <div className={styles.cartButtons}>
                    <div className={styles.counter}>
                        <button className={styles.minus}><Minus size={14} weight='bold' /></button>
                        <div className={styles.counterValue}>1</div>
                        <button className={styles.plus}><Plus size={14} weight='bold' /></button>
                    </div>
                    <button className={styles.cartButton}><ShoppingCart weight='fill' size={20} /></button>
                </div>

            </div>
        </div>
    )
}