import {Unit} from "./unit.model";

export interface Meal {
    id: string;
    name: string;
    description: string;
    unit: Unit;
    isFrozen?: boolean;
    isFresh?: boolean;
    image_id?: string;
}
