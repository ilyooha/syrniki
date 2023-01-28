import MealItem from "./MealItem/MealItem";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import {Meal} from "../../store/meal.model";

const availableMeals: Meal[] = [
    {
        id: 'm1',
        name: 'Syrniki',
        description: `Perfect for breakfast, the best addition to a cup of coffee/tea. If you have not tried it before, you don't know what the real love is. Note: condensed milk is not included`,
        unitPrice: 30,
        unit: 'pz',
        isFrozen: true,
        image_id: 'syrniki_malina.jpeg',
    },
    {
        id: 'm2',
        name: 'Pelmeni, Beef & Pork',
        description: `A delicious dinner has never been closer: put it into boiling water for 5 min, then serve it with your fav sauce. Trust me, you will never get enough of these`,
        unitPrice: 350,
        unit: 'kg',
        isFrozen: true,
        image_id: 'pelmeni.jpeg',
    },
    {
        id: 'm3',
        name: 'Pelmeni, Chicken',
        description: `A delicious dinner has never been closer: put it into boiling water for 5 min, then serve it with your fav sauce. Trust me, you will never get enough of these`,
        unitPrice: 300,
        unit: 'kg',
        isFrozen: true,
        image_id: 'pelmeni.jpeg',
    },
    {
        id: 'm5',
        name: 'Borsch',
        description: ``,
        unitPrice: 215,
        unit: 'l',
        isFresh: true,
        image_id: 'borsch.jpeg',
    },
    {
        id: 'm6',
        name: 'Golubzi',
        description: ``,
        unitPrice: 30,
        unit: 'pz',
        isFresh: true,
        image_id: 'golubzi.jpeg',
    },
    {
        id: 'm7',
        name: 'Chopped Kotleti',
        description: ``,
        unitPrice: 215,
        unit: 'pz',
        isFresh: true,
    },
    {
        id: 'm8',
        name: 'Beef Stroganov',
        description: ``,
        unitPrice: 350,
        unit: 'kg',
        isFresh: true,
    },
    {
        id: 'm9',
        name: 'Oliv`e',
        description: ``,
        unitPrice: 300,
        unit: 'kg',
        isFresh: true,
    }
];

const AvailableMeals = () => {
    return (
        <>
            <ul className={styles.meals}>
                {availableMeals.map(m => {
                    return (
                        <li key={m.id}>
                            <Card>
                                <MealItem meal={m}/>
                            </Card>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default AvailableMeals;