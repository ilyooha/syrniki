import {MenuItem} from "./menu-item.model";

export interface CartItem {
    menuItem: MenuItem;
    amount: number;
}