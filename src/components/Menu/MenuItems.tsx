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
        price: 350 / 2,
        available: true,
    },
    {
        id: 'm4',
        meal: {
            id: 'm4',
            name: 'Vareniki, Potato',
            unit: {
                name: '500 g',
                grams: 500
            },
            isFrozen: true,
            //image_id: 'pelmeni.jpeg',
        },
        price: 300 * 0.5,
        available: true,
    },
    {
        id: 'm4',
        meal: {
            id: 'm4',
            name: 'Vareniki, Cabbage',
            unit: {
                name: '500 g',
                grams: 500
            },
            isFrozen: true,
            //image_id: 'pelmeni.jpeg',
        },
        price: 300 * 0.5,
        available: true,
    },
    {
        id: 'm5',
        meal: {
            id: 'm5',
            name: 'Vareniki, Potato + Champignon',
            unit: {
                name: '500 g',
                grams: 500
            },
            isFrozen: true,
            //image_id: 'pelmeni.jpeg',
        },
        price: 300 * 0.5,
        available: true,
    },
    {
        id: 'm6',
        meal: {
            id: 'm6',
            name: 'Blini, Cottage Cheese',
            description: ``,
            unit: {
                name: 'pz',
                grams: 50
            },
            isFresh: true,
        },
        price: 30,
        available: true,
    },
    {
        id: 'm7',
        meal: {
            id: 'm7',
            name: 'Borsch',
            description: ``,
            unit: {
                name: '3 l',
                grams: 3000
            },
            isFresh: true,
            image_id: 'borsch.jpeg',
        },
        price: 600,
        available: true,
    },
    {
        id: 'm8',
        meal: {
            id: 'm8',
            name: 'Golubzi',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
            image_id: 'golubzi.jpeg',
        },
        price: 350,
        available: true,
    },
    {
        id: 'm9',
        meal: {
            id: 'm9',
            name: 'Chopped Chicken Kotleti',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
        },
        price: 300,
        available: true,
    },
    {
        id: 'm10',
        meal: {
            id: 'm10',
            name: 'Beef Stroganov',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
        },
        price: 350,
        available: true,
    },
    {
        id: 'm11',
        meal: {
            id: 'm11',
            name: 'Oliv`e, Chicken',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
        },
        price: 350,
        available: true,
    },
    {
        id: 'm12',
        meal: {
            id: 'm12',
            name: 'Oliv`e, Ham',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
        },
        price: 350,
        available: true,
    },
    {
        id: 'm13',
        meal: {
            id: 'm13',
            name: 'Stuffed Peppers, Beef + Pork',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
        },
        price: 400,
        available: true,
    },
    {
        id: 'm14',
        meal: {
            id: 'm14',
            name: 'Stuffed Peppers, Beef + Pork',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
        },
        price: 400,
        available: true,
    },
    {
        id: 'm15',
        meal: {
            id: 'm15',
            name: 'Chicken Soup',
            description: ``,
            unit: {
                name: '3 l',
                grams: 3000
            },
            isFresh: true,
        },
        price: 300,
        available: true,
    },
    {
        id: 'm16',
        meal: {
            id: 'm16',
            name: 'Khachapuri',
            description: ``,
            unit: {
                name: 'pz',
                grams: 300
            },
            isFresh: true,
        },
        price: 200,
        available: true,
    },
    {
        id: 'm17',
        meal: {
            id: 'm16',
            name: 'Azu',
            description: ``,
            unit: {
                name: 'kg',
                grams: 1000
            },
            isFresh: true,
        },
        price: 400,
        available: true,
    },
    {
        id: 'm18',
        meal: {
            id: 'm18',
            name: 'Salted Salmon',
            description: ``,
            unit: {
                name: '500 g',
                grams: 500
            },
            isFresh: true,
        },
        price: 400,
        available: true,
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