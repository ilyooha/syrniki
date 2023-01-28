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
        const cost = Math.round(i.meal.unitPrice * i.amount * 100) / 100;
        costByMeal[i.meal.id] = cost;
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
        for(const item of context.items) {
            lines.push(` - ${item.meal.name}: ${item.amount} ${item.meal.unit}`);
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
                        const meal = item.meal;
                        return (
                            <li key={meal.id}>
                                <CartItem item={item}
                                          total={costByMeal[meal.id]}
                                          onIncrement={() => {
                                              context.addItem(meal, 1)
                                          }}
                                          onDecrement={() => {
                                              context.removeItem(meal.id, 1)
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