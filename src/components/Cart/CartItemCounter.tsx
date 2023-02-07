import {CartItem} from "../../store/cart-item.model";
import styles from './CartItemCounter.module.css';

export interface CartItemCounterProps {
    item: CartItem;
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

    return (
        <div className={styles.counter}>
            <button onClick={decrementHandler}>-</button>
            <span>{props.item.amount} {props.item.menuItem.meal.unit.name}</span>
            <button onClick={incrementHandler}>+</button>
        </div>
    );
}

export default CartItemCounter;