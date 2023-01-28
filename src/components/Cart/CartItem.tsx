import Money from "../UI/Money";
import * as models from "../../store/cart-item.model";
import styles from './CartItem.module.css';
import MealItemForm from "../Meals/MealItem/MealItemForm";

export interface CartItemProps {
    item: models.CartItem;
    total: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const CartItem = (props: CartItemProps) => {
    const meal = props.item.meal;
    const total = props.total;

    return (
        <div className={styles['cart-item']}>
            <span className={styles.title}>{meal.name}</span>
            <div className={styles.actions}>
                <MealItemForm meal={props.item.meal}/>
            </div>
            <div className={styles.total}>
                <Money value={total}/>
            </div>
        </div>
    )
}

export default CartItem;