import * as React from "react";
import {CartItem} from "./cart-item.model";
import {MenuItem} from "./menu-item.model";

export interface CartContextValue {
    items: CartItem[],
    addItem: (menuItem: MenuItem, amount: number) => void;
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