import styles from './styles.module.css';
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { TitleForm } from '../../components/TitleForm';

export function Checkout() {
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
                        <button>
                            <CreditCard size={16} color='#8047F8'  />
                            <span>CARTÃO DE CRÉDITO</span>
                        </button>
                        <button>
                            <Money size={16} color='#8047F8'  />
                            <span>CARTÃO DE DÉBITO</span>
                        </button>
                        <button>
                            <Bank size={16} color='#8047F8'  />
                            <span>DINHEIRO</span>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className={styles.title}>Cafés selecionados</h1>
                <div className={styles.selectedCoffeesBox}>
                    <h1>oi</h1>
                    <br />
                </div>
            </div>
        </div>
    )
}