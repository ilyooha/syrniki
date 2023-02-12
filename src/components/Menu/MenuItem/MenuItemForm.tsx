import CartContext from "../../../store/cart-context";
import {useContext} from "react";
import styles from './MenuItemForm.module.css';
import CartItemCounter from "../../Cart/CartItemCounter";
import {MenuItem} from "../../../store/menu-item.model";

export interface MenuItemFormProps {
    menuItem: MenuItem;
}

const MenuItemForm = (props: MenuItemFormProps) => {
    const cartContext = useContext(CartContext);
    const menuItem = props.menuItem;
    const cartItem = cartContext.items
        .find(i => i.menuItem.id === menuItem.id);

    const decrementHandler = () => {
        cartContext.removeItem(menuItem.id, 1);
    }

    const incrementHandler = () => {
        cartContext.addItem(menuItem, 1);
    }

    const amount = cartItem == null ? 0 : cartItem.amount;
    return (
        <div className={styles.actions}>
            <CartItemCounter menuItem={menuItem} amount={amount || 0} onIncrement={incrementHandler}
                             onDecrement={decrementHandler}/>
        </div>
    );
}

export default MenuItemForm;
