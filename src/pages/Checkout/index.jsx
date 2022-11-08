import styles from './styles.module.css';
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { TitleForm } from './components/TitleForm';
import { CoffeeItemCard } from './components/CoffeeItemCard';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [street, setStreet] = useState('');
    const [bairro, setBairro] = useState('');
    const [number, setNumber] = useState('');
    const { cart } = useContext(CartContext);
    const [total, setTotal] = useState('0');
    const [coffeesPrice, setCoffeesPrice] = useState('0');
    const delivery = 3.50;

    useEffect(() => {
        let sum = 0;
        cart.forEach(coffee => {
            let coffeePrice = coffee.price * coffee.amount;
            sum += parseFloat(coffeePrice);
        })
        setCoffeesPrice(sum.toFixed(2).replace('.', ','));
        sum += parseFloat(delivery);
        setTotal(sum.toFixed(2).replace('.',','));
    }, [cart])
    return (
        <div className={styles.container}>

            <div className={styles.formComplete}>
                <h1 className={styles.title}>Complete seu pedido</h1>
                <div className={styles.completeBox}>

                    <TitleForm 
                        title="Endereço de Entrega"
                        subtitle="Informe o endereço onde deseja receber seu pedido"
                        icon={<MapPinLine size={22} color='#C47F17' />}
                    />

                    <form action="">
                        <input type="text" placeholder='CEP' required className={`${styles.cepInput} ${styles.defaultInput}`} />
                        <input type="text" placeholder='Rua' required className={`${styles.teste} ${styles.defaultInput}`} onChange={(e) => {setStreet(e.target.value)}} value={street} />
                        <div className={styles.formRow}>
                            <input type="text" placeholder='Número' required className={`${styles.numberInput} ${styles.defaultInput}`} onChange={(e) => {setNumber(e.target.value)}} value={number} />
                            <input type="text" placeholder='Complemento' className={`${styles.complementInput} ${styles.defaultInput}`} />
                        </div>
                        <div className={styles.formRow}>
                            <input type="text" placeholder='Cidade' disabled value="Porto Alegre" className={`${styles.cityInput} ${styles.defaultInput}`} />
                            <div className={styles.formRowMobile}>
                                <input type="text" placeholder='Bairro' required className={`${styles.bairroInput} ${styles.defaultInput}`} onChange={(e) => {setBairro(e.target.value)}} value={bairro} />
                                <input type="text" placeholder='UF' value="RS" disabled className={`${styles.ufInput} ${styles.defaultInput}`} />
                            </div>
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
                        <button onClick={() => setPaymentMethod(1)} className={paymentMethod == 1 ? styles.selected : ''} >
                            <CreditCard size={16} color='#8047F8'  />
                            <span>CARTÃO DE CRÉDITO</span>
                        </button>
                        <button onClick={() => setPaymentMethod(2)} className={paymentMethod == 2 ? styles.selected : ''} >
                            <Money size={16} color='#8047F8'  />
                            <span>CARTÃO DE DÉBITO</span>
                        </button>
                        <button onClick={() => setPaymentMethod(3)} className={paymentMethod == 3 ? styles.selected : ''} >
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
                        return <CoffeeItemCard key={coffee.name+index} data={coffee} />
                    })}

                    <div className={styles.totalBox}>
                        <div>
                            <span className={styles.textS}>Total de itens</span>
                            <span className={styles.textM}>R$ {coffeesPrice}</span>
                        </div>

                        <div>
                            <span className={styles.textS}>Entrega</span>
                            <span className={styles.textM}>R$ {delivery.toFixed(2).replace('.', ',')}</span>
                        </div>

                        <div>
                            <span className={styles.textBoldL}>Total</span>
                            <span className={styles.textBoldL}>R$ {total}</span>
                        </div>
                    </div>

                    <Link className={styles.confirm} to='/success' state={{ "street": street, "bairro": bairro, "number": number, "paymentMethod": paymentMethod  }}>CONFIRMAR PEDIDO</Link>

                </div>
            </div>
        </div>
    )
}