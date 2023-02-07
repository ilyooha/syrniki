import styles from './MenuItem.module.css';
import MenuItemForm from "./MenuItemForm";
import Money from "../../UI/Money";
import Frozen from "../Frozen";
import Fresh from "../Fresh";
import * as model from "../../../store/menu-item.model";

export interface MenuItemProps {
    menuItem: model.MenuItem;
}

const MenuItem = (props: MenuItemProps) => {
    const meal = props.menuItem.meal;
    return (
        <>
            <div className={styles.content}>
                <div className={styles.column}>
                    <h3 className={styles.title}>{meal.name}</h3>
                    <div className={styles.characteristics}>
                        <Money value={props.menuItem.price}/> / {meal.unit.name}
                        {meal.isFrozen && <Frozen/>}
                        {meal.isFresh && <Fresh/>}
                    </div>
                    <div className={styles.actions}>
                        <MenuItemForm menuItem={props.menuItem}/>
                    </div>
                </div>
                <div className={styles.column + ' ' + styles.image}>
                    {meal.image_id != null &&
                      <img alt='meal' src={`${process.env.PUBLIC_URL}/images/${meal.image_id}`}/>}
                </div>
            </div>
        </>
    );
}

export default MenuItem;