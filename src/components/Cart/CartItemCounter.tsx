import styles from './CartItemCounter.module.css';
import {MenuItem} from "../../store/menu-item.model";

export interface CartItemCounterProps {
    amount: number;
    menuItem: MenuItem;
    onIncrement: () => void;
    onDecrement: () => void;
}

const CartItemCounter = (props: CartItemCounterProps) => {
    const decrementHandler = () => {
        props.onDecrement();
    }

    const incrementHandler = () => {
        props.onIncrement();
    }

    const classes = [styles.counter];
    if (props.amount > 0)
        classes.push(styles.secondary);

    return (
        <div className={classes.join(' ')}>
            <button onClick={decrementHandler}>-</button>
            <div className={styles.amount}>
                {props.amount === 0
                    ? <span>Add</span>
                    : <>
                        <span className={styles.count}>{props.amount}</span>
                        <span className={styles.weight}>({props.amount * props.menuItem.meal.unit.grams} g)</span>
                    </>
                }
            </div>
            <button onClick={incrementHandler}>+</button>
        </div>
    );
}

export default CartItemCounter;