import Money from "../UI/Money";
import * as models from "../../store/cart-item.model";
import styles from './CartItem.module.css';
import MenuItemForm from "../Menu/MenuItem/MenuItemForm";

export interface CartItemProps {
    item: models.CartItem;
    total: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const CartItem = (props: CartItemProps) => {
    const meal = props.item.menuItem.meal;
    const total = props.total;

    return (
        <div className={styles['cart-item']}>
            <span className={styles.title}>{meal.name}</span>
            <div className={styles.actions}>
                <MenuItemForm menuItem={props.item.menuItem}/>
            </div>
            <div className={styles.total}>
                <Money value={total}/>
            </div>
        </div>
    )
}

export default CartItem;