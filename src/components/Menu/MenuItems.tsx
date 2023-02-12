import MenuItem from "./MenuItem/MenuItem";
import styles from "./MenuItems.module.css";
import Card from "../UI/Card";
import * as model from "../../store/menu-item.model";

const menuItems: model.MenuItem[] = [
    {
        id: 'm1',
        meal: {
            id: 'm1',
            name: 'Syrniki',
            description: `Perfect for breakfast, the best addition to a cup of coffee/tea. If you have not tried it before, you don't know what the real love is. Note: condensed milk is not included`,
            unit: {
                name: 'pz',
                grams: 50,
            },
            isFrozen: true,
            image_id: 'syrniki_malina.jpeg',
        },
        price: 30,
        available: true,
    },
    {
        id: 'm2',
        meal: {
            id: 'm2',
            name: 'Pelmeni, Beef & Pork',
            description: `A delicious dinner has never been closer: put it into boiling water for 5 min, then serve it with your fav sauce. Trust me, you will never get enough of these`,
            unit: {
                name: '500 g',
                grams: 500
            },
            isFrozen: true,
            image_id: 'pelmeni.jpeg',
        },
        price: 350 / 2,
        available: true,
    },
    {
        id: 'm3',
        meal: {
            id: 'm3',
            name: 'Pelmeni, Chicken',
            description: `A delicious dinner has never been closer: put it into boiling water for 5 min, then serve it with your fav sauce. Trust me, you will never get enough of these`,
            unit: {
                name: '500 g',
                grams: 500
            },
            isFrozen: true,
            image_id: 'pelmeni.jpeg',
        },
        price: 300 / 2,
        available: true,
    },
    {
        id: 'm5',
        meal: {
            id: 'm5',
            name: 'Borsch',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
            image_id: 'borsch.jpeg',
        },
        price: 215,
        available: false,
    },
    {
        id: 'm6',
        meal: {
            id: 'm6',
            name: 'Golubzi',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
            image_id: 'golubzi.jpeg',
        },
        price: 30,
        available: false,
    },
    {
        id: 'm7',
        meal: {
            id: 'm7',
            name: 'Chopped Kotleti',
            description: ``,
            unit: {
                name: 'pz',
                grams: 50
            },
            isFresh: true,
        },
        price: 215,
        available: true,
    },
    {
        id: 'm8',
        meal: {
            id: 'm8',
            name: 'Beef Stroganov',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
        },
        price: 350,
    },
    {
        id: 'm9',
        meal: {
            id: 'm9',
            name: 'Oliv`e',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
        },
        price: 300,
    }
];

const MenuItems = () => {
    return (
        <>
            <ul className={styles.meals}>
                {menuItems
                    .filter(m => m.available)
                    .map(m => {
                        return (
                            <li key={m.id}>
                                <Card>
                                    <MenuItem menuItem={m}/>
                                </Card>
                            </li>
                        )
                    })}
            </ul>
        </>
    );
}

export default MenuItems;