import Money from "../UI/Money";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

import styles from './Cart.module.css';
import {useContext, useEffect} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import ModalContext from "../../store/modal-context";

export interface CartProps {
    onClose: () => void;
}

const Cart = (props: CartProps) => {
    const modalContext = useContext(ModalContext);
    const context = useContext(CartContext);
    const costByMeal: { [mealId: string]: number } = {};
    let costTotal: number = 0;
    for (const i of context.items) {
        const cost = Math.round(i.menuItem.price * i.amount * 100) / 100;
        costByMeal[i.menuItem.id] = cost;
        costTotal += cost;
    }

    useEffect(() => {
        modalContext.onShowModal();
        return () => {
            modalContext.onHideModal();
        }
    }, [modalContext]);

    const orderClickHandler = () => {
        const lines = ['Hi, I want to order these:'];
        for (const item of context.items) {
            const meal = item.menuItem.meal;
            lines.push(` - ${meal.name}: ${item.amount} ${meal.unit.name}`);
        }
        const text = lines.join('\r\n');
        const url = `https://wa.me/523333616926?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noreferrer')
    }

    return (
        <Modal onBackdropClick={props.onClose}>
            <div className={styles.cart}>
                <h1 className={styles.heading}>Cart</h1>
                <ul className={styles.items}>
                    {context.items.map(item => {
                        const menuItem = item.menuItem;
                        return (
                            <li key={menuItem.id}>
                                <CartItem item={item}
                                          total={costByMeal[menuItem.id]}
                                          onIncrement={() => {
                                              context.addItem(menuItem, 1)
                                          }}
                                          onDecrement={() => {
                                              context.removeItem(menuItem.id, 1)
                                          }}
                                />
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.total}>
                    <span>Total:</span>
                    <Money value={costTotal}/>
                </div>
                <div className={styles.actions}>
                    <Button appearance='secondary' onClick={props.onClose}>Close</Button>
                    {context.items.length > 0 && <Button onClick={orderClickHandler}>Order</Button>}
                </div>
            </div>
        </Modal>
    )
}

export default Cart;