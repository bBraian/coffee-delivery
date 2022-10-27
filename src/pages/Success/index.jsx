import styles from './styles.module.css';
import delivery from '../../assets/delivery.png';
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';
import { Item } from './components/Item';

export function Succeess() {
    return (
        <div className={styles.container}>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
            <div className={styles.row}>
                <div className={styles.box}>
                    <Item title="Rua João Daniel Martinelli, 102" subtitle="Farrapos - Porto Alegre, RS" icon="delivery" />
                    <Item title="Rua João Daniel Martinelli, 102" subtitle="Farrapos - Porto Alegre, RS" icon="timer" />
                    <Item title="Rua João Daniel Martinelli, 102" subtitle="Farrapos - Porto Alegre, RS" icon="money" />
                </div>

                <img src={delivery} alt="Figura ilustrativa do entregador em cima da moto indo entregar seu pedido" />
            </div>
        </div>
    )
}