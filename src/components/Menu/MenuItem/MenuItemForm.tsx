import Button from "../../UI/Button";
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

    const addHandler = () => {
        cartContext.addItem(menuItem, 1);
    }

    if (cartItem == null) {
        return (
            <Button onClick={addHandler}>Add</Button>
        )
    }

    const decrementHandler = () => {
        cartContext.removeItem(menuItem.id, 1);
    }

    const incrementHandler = () => {
        cartContext.addItem(menuItem, 1);
    }

    const removeHandler = () => {
        cartContext.removeItem(menuItem.id, cartItem.amount);
    }

    return (
        <div className={styles.actions}>
            <CartItemCounter item={cartItem} onIncrement={incrementHandler} onDecrement={decrementHandler}/>
            <button className={styles.remove} onClick={removeHandler}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    );
}

export default MenuItemForm;
