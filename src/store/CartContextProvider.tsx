import CartContext, {CartContextValue} from "./cart-context";
import {ReactNode, Reducer, useReducer} from "react";
import {CartItem} from "./cart-item.model";
import {MenuItem} from "./menu-item.model";

interface CartContextProviderProps {
    children?: ReactNode;
}

interface CartState {
    items: CartItem[]
}

const defaultCartState: CartState = {
    items: []
}

interface AddItemAction {
    type: 'CART/ADD_ITEM';
    menuItem: MenuItem;
    amount: number;
}

interface RemoveItemAction {
    type: 'CART/REMOVE_ITEM';
    mealId: string;
    amount: number;
}

const cartReducer: Reducer<CartState, AddItemAction | RemoveItemAction> = (state, action) => {
    if (action.type === 'CART/ADD_ITEM') {
        const updatedItems: CartItem[] = [];
        let newItem = true;
        for (const item of state.items) {
            if (item.menuItem.id === action.menuItem.id) {
                updatedItems.push({
                    ...item,
                    amount: item.amount + action.amount
                });
                newItem = false;
            } else {
                updatedItems.push(item);
            }
        }

        if (newItem) {
            updatedItems.push({
                menuItem: action.menuItem,
                amount: action.amount
            });
        }

        return {
            ...state,
            items: updatedItems
        }
    }

    if (action.type === 'CART/REMOVE_ITEM') {
        const updatedItems: CartItem[] = [];
        for (const item of state.items) {
            if (item.menuItem.id === action.mealId) {
                const newAmount = item.amount - action.amount;
                if (newAmount > 0)
                    updatedItems.push({
                        menuItem: item.menuItem,
                        amount: newAmount,
                    });
            } else {
                updatedItems.push(item);
            }
        }
        return {
            ...state,
            items: updatedItems,
        }
    }

    return state;
}

const CartContextProvider = (props: CartContextProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, defaultCartState);

    const value: CartContextValue = {
        items: state.items,
        addItem: (item: MenuItem, amount: number) => {
            console.log('dispatching...');
            dispatch({
                type: 'CART/ADD_ITEM',
                menuItem: item,
                amount: amount,
            });
        },
        removeItem: (id: string, amount: number) => {
            dispatch({
                type: 'CART/REMOVE_ITEM',
                mealId: id,
                amount: amount,
            });
        }
    }

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;