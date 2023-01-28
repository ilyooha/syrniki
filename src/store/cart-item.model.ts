import {Meal} from "./meal.model";

export interface CartItem {
    meal: Meal;
    amount: number;
}