import styles from './styles.module.css';
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { TitleForm } from './components/TitleForm';
import { CoffeeItemCard } from './components/CoffeeItemCard';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

export function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('0');
    const { cart } = useContext(CartContext);
    const [total, setTotal] = useState('0');
    const [coffeesPrice, setCoffeesPrice] = useState('0');
    const delivery = 3.50;

    useEffect(() => {
        let sum = 0;
        cart.forEach(coffee => {
            sum += parseFloat(coffee.price);
        })
        setCoffeesPrice(sum.toFixed(2).replace('.', ','));
        sum += parseFloat(delivery);
        setTotal(sum.toFixed(2).replace('.',','));
    }, [cart])
    console.log(cart)
    return (
        <div className={styles.container}>

            <div>
                <h1 className={styles.title}>Complete seu pedido</h1>
                <div className={styles.completeBox}>

                    <TitleForm 
                        title="Endereço de Entrega"
                        subtitle="Informe o endereço onde deseja receber seu pedido"
                        icon={<MapPinLine size={22} color='#C47F17' />}
                    />

                    <form action="">
                        <input type="text" placeholder='CEP' className={`${styles.cepInput} ${styles.defaultInput}`} />
                        <input type="text" placeholder='Rua' className={`${styles.teste} ${styles.defaultInput}`} />
                        <div className={styles.formRow}>
                            <input type="text" placeholder='Número' className={`${styles.numberInput} ${styles.defaultInput}`} />
                            <input type="text" placeholder='Complemento' className={`${styles.complementInput} ${styles.defaultInput}`} />
                        </div>
                        <div className={styles.formRow}>
                            <input type="text" placeholder='Bairro' className={`${styles.bairroInput} ${styles.defaultInput}`} />
                            <input type="text" placeholder='Cidade' className={`${styles.cityInput} ${styles.defaultInput}`} />
                            <input type="text" placeholder='UF' className={`${styles.ufInput} ${styles.defaultInput}`} />
                        </div>
                    </form>

                </div>
                <div className={styles.completeBox}>
                    <TitleForm 
                        title="Pagamento"
                        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                        icon={<CurrencyDollar size={22} color='#8047F8' />}
                    />
                    <div className={styles.payment}>
                        <button onClick={() => setPaymentMethod('1')} className={paymentMethod == '1' ? styles.selected : ''} >
                            <CreditCard size={16} color='#8047F8'  />
                            <span>CARTÃO DE CRÉDITO</span>
                        </button>
                        <button onClick={() => setPaymentMethod('2')} className={paymentMethod == '2' ? styles.selected : ''} >
                            <Money size={16} color='#8047F8'  />
                            <span>CARTÃO DE DÉBITO</span>
                        </button>
                        <button onClick={() => setPaymentMethod('3')} className={paymentMethod == '3' ? styles.selected : ''} >
                            <Bank size={16} color='#8047F8'  />
                            <span>DINHEIRO</span>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className={styles.title}>Cafés selecionados</h1>
                <div className={styles.selectedCoffeesBox}>
                    {cart.map((coffee, index) => {
                        return <CoffeeItemCard key={index} data={coffee} />
                    })}

                    <div className={styles.totalBox}>
                        <div>
                            <span>Total de itens</span>
                            <span>R$ {coffeesPrice}</span>
                        </div>

                        <div>
                            <span>Entrega</span>
                            <span>R$ {delivery.toFixed(2).replace('.', ',')}</span>
                        </div>

                        <div>
                            <span>Total</span>
                            <span>R$ {total}</span>
                        </div>
                    </div>

                    <button className={styles.confirm}>CONFIRMAR PEDIDO</button>

                </div>
            </div>
        </div>
    )
}