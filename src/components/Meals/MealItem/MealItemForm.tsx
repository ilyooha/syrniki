import Button from "../../UI/Button";
import CartContext from "../../../store/cart-context";
import {useContext} from "react";
import {Meal} from "../../../store/meal.model";
import styles from './MealItemForm.module.css';
import CartItemCounter from "../../Cart/CartItemCounter";

export interface MealItemFormProps {
    meal: Meal;
}

const MealItemForm = (props: MealItemFormProps) => {
    const cartContext = useContext(CartContext);
    const meal = props.meal;
    const cartItem = cartContext.items
        .find(i => i.meal.id === meal.id);

    const addHandler = () => {
        cartContext.addItem(meal, 1);
    }

    if (cartItem == null) {
        return (
            <Button onClick={addHandler}>Add</Button>
        )
    }

    const decrementHandler = () => {
        cartContext.removeItem(meal.id, 1);
    }

    const incrementHandler = () => {
        cartContext.addItem(meal, 1);
    }

    const removeHandler = () => {
        cartContext.removeItem(meal.id, cartItem.amount);
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

export default MealItemForm;
