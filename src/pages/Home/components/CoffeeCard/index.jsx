import styles from './CoffeeCard.module.css';
import { ShoppingCart} from 'phosphor-react';
import { CounterButton } from '../../../../components/CounterButton';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';

export function CoffeeCard({data}) {
    const { addToCart, cart, coffeeAmount } = useContext(CartContext);
    return (
        <div className={styles.container}>
            <img src={data.image} alt="" />

            <div className={styles.tagContainer}>
            {data.tag.map((tagg, index) => {
                return (
                    <span key={index} className={styles.tag}>{tagg.name}</span>
                    )
                })}
            </div>

            <h1 className={styles.name}>{data.name}</h1>
            <span className={styles.description}>{data.description}</span>

            <div className={styles.cartRow}>
                <span>R$ <b>{data.price}</b></span>
                <div className={styles.cartButtons}>
                    <CounterButton height='2.375rem' amount={coffeeAmount} />
                    <button className={styles.cartButton} onClick={() => addToCart(data)}>
                        <ShoppingCart weight='fill' size={20} />
                    </button>
                </div>

            </div>
        </div>
    )
}