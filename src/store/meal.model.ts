export interface Meal {
    id: string;
    name: string;
    description: string;
    unit: string;
    unitPrice: number;
    isFrozen?: boolean;
    isFresh?: boolean;
    image_id?: string;
}