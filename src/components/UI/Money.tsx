import styles from './Money.module.css';

function pad(num: number, size: number): string {
    let out = num.toString();
    while (out.length < size) out = "0" + out;
    return out;
}

const Money = (props: MoneyProps) => {
    const currencyCharacter = '$';

    const whole = Math.floor(props.value);
    const fraction = Math.round(props.value % 1 * 100);

    return (
        <span className={styles.money}>
            <span className={styles.currency}>{currencyCharacter}</span>
            <span className={styles.whole}>{whole.toFixed(0)}</span>
            <span className={styles.fraction}>.{pad(fraction, 2)}</span>
        </span>
    )
}

export default Money;

export interface MoneyProps {
    value: number;
}