import * as React from "react";
import {CartItem} from "./cart-item.model";
import {Meal} from "./meal.model";

export interface CartContextValue {
    items: CartItem[],
    addItem: (meal: Meal, amount: number) => void;
    removeItem: (id: string, amount: number) => void;
}

const CartContext = React.createContext<CartContextValue>({
    items: [],
    addItem: () => {
    },
    removeItem: () => {
    }
});

export default CartContext;