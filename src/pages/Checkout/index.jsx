import styles from './styles.module.css';
import { MapPinLine } from 'phosphor-react';

export function Checkout() {
    return (
        <div className={styles.container}>

            <div>
                <h1 className={styles.title}>Complete seu pedido</h1>
                <div className={styles.completeBox}>

                    <div className={styles.rowSubTitle}>
                        <div>
                            <MapPinLine size={22} color='#C47F17' />
                        </div>
                        <div className={styles.iconTitle}>
                            <h2 className={styles.addresTitle}>Endereço de Entrega</h2>
                            <span className={styles.addresSubTitle}>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </div>

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