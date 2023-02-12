import {Meal} from "./meal.model";

export interface MenuItem {
    id: string;
    meal: Meal;
    price: number;
    available?: boolean;
}